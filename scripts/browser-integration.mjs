// Real browser fixture: never calls a live service or uses production credentials.
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { WebSocketServer } from 'ws';
const require = createRequire(import.meta.url);
const chromium = require('../test/browser102/node_modules/playwright-core').chromium;
const bundle = await build({entryPoints:['src/browser.ts'],bundle:true,platform:'browser',target:'chrome102',format:'iife',globalName:'Sdk',write:false});
let issued=0, closedStreams=0;
const consumed=new Set();
const server=createServer(async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');res.setHeader('Access-Control-Allow-Headers','Content-Type,X-OpenAPI-Token,X-Request-ID');res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');res.setHeader('Access-Control-Expose-Headers','Content-Type,Content-Disposition,X-Request-ID');
    if(req.method==='OPTIONS'){res.writeHead(204);res.end();return;}
    if(req.url==='/'){res.end('<!doctype html><title>SDK compatibility fixture</title>');return;}
    if(req.url==='/token'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify({token:'fresh-'+(++issued)}));return;}
    const token=req.headers['x-openapi-token'];if(!token||consumed.has(token)){res.writeHead(401);res.end('{}');return;}consumed.add(token);
    let text='';for await(const chunk of req)text+=chunk;
    if(req.url.endsWith('/stream')){
        res.writeHead(200,{'Content-Type':'text/event-stream','X-Request-ID':'fixture-stream'});res.write(':ready\n\n');res.on('close',()=>{closedStreams++;});
        const input=JSON.parse(text);
        if(input.messageId==='broken'){res.end();return;}
        if(input.messageId==='cancel')return;
        res.write('data: {"type":"future-event","value":1}\n\n');
        res.write('data: {"type":"end","totalUsage":{},"executionTimeMillis":0,"artifacts":[],"nonFileArtifacts":[]}\n\n');return;
    }
    if(req.url.includes('/export')){res.writeHead(200,{'Content-Type':'text/csv','Content-Disposition':"attachment; filename*=UTF-8''%E4%B8%AD.csv"});res.end(Buffer.from([0,255,1]));return;}
    res.writeHead(410,{'Content-Type':'application/json','X-Request-ID':'fixture-error'});res.end('{"code":"EXPIRED","message":"expired","fields":[{"field":"title","message":"required"}]}');
});
const wss=new WebSocketServer({noServer:true});
server.on('upgrade',(req,socket,head)=>{
    const protocol=req.headers['sec-websocket-protocol'];const token=protocol?.slice('xlt-openapi-token.'.length);
    if(!protocol?.startsWith('xlt-openapi-token.')||consumed.has(token)){socket.destroy();return;}consumed.add(token);
    wss.handleUpgrade(req,socket,head,ws=>{
        const id=new URL(req.url,'http://fixture').searchParams.get('messageId');
        ws.send(JSON.stringify({id,event:'ready'}));ws.send(JSON.stringify({id,event:'message',data:{type:'future-event'}}));
        ws.send(JSON.stringify({id,event:'end',data:{type:'end',totalUsage:{},executionTimeMillis:0,artifacts:[],nonFileArtifacts:[]}}));
    });
});
await new Promise(r=>server.listen(0,r));const port=server.address().port;
const executable=process.env.CHROMIUM_EXECUTABLE ?? resolve('.cache/browser102/chrome-win/chrome.exe');
let browser;
try {
    browser=await chromium.launch({executablePath:executable,headless:true});
    const version=browser.version();const expected=process.env.CHROMIUM_MAJOR ?? '102';assert.equal(version.split('.')[0],expected,`Expected Chromium ${expected}, got ${version}`);
    const page=await browser.newPage();await page.goto(`http://localhost:${port}/`);await page.addScriptTag({content:bundle.outputFiles[0].text});
    const result=await page.evaluate(async({baseUrl})=>{
        let networkCalls=0;
        const network=(...args)=>{networkCalls++;return fetch(...args);};
        const client=new Sdk.AgentsClient({baseUrl,channelId:'c',fetch:network,auth:{type:'token',tokenProvider:async context=>{
            const response=await context.fetch(baseUrl+'/token',{method:'POST',signal:context.signal});return(await response.json()).token;
        }}});
        const diagnostics=[];const sub=client.chat.subscribeChatEvents('c',{messageId:'m'},{onConnectionEvent:event=>diagnostics.push(event.type)});
        const events=[];for await(const event of sub)events.push(event.type);
        if(events.join(',')!=='future-event,end'||(await sub.closed).reason!=='end')throw Error('SSE lifecycle');
        if(!diagnostics.includes('ready')||!diagnostics.includes('closed'))throw Error('diagnostics');
        const ws=client.chat.subscribeChatEvents('c',{messageId:'w'},{transport:'websocket'});const wsEvents=[];for await(const event of ws)wsEvents.push(event.type);
        if(wsEvents.join(',')!=='future-event,end')throw Error('WebSocket parsing');
        const file=await client.sql.exportSqlQueryResultWithMetadata('c','r',{format:'CSV'});if(file.filename!=='中.csv'||file.bytes[1]!==255)throw Error('download metadata');
        try{await client.configuration.getAgentsConfig();throw Error('missing HTTP error');}catch(e){if(e.kind!=='http'||e.status!==410||e.code!=='EXPIRED'||e.requestId!=='fixture-error')throw e;}
        const cancel=new AbortController();const pending=client.chat.subscribeChatEvents('c',{messageId:'cancel'},{signal:cancel.signal});setTimeout(()=>cancel.abort(),30);
        try{for await(const value of pending)void value;throw Error('missing cancellation');}catch(e){if(e.kind!=='cancelled')throw e;}
        const never=new Sdk.AgentsClient({baseUrl,channelId:'c',fetch:network,auth:{type:'token',tokenProvider:()=>new Promise(()=>{})}});
        try{await never.configuration.getAgentsConfig({timeoutMs:20});throw Error('missing timeout');}catch(e){if(e.kind!=='timeout')throw e;}
        try{for await(const value of client.chat.streamChatEvents('c',{messageId:'broken'}))void value;throw Error('missing EOF error');}catch(e){if(e.kind!=='unexpected_eof')throw e;}
        return {networkCalls,events,wsEvents};
    },{baseUrl:`http://127.0.0.1:${port}`});
    assert(result.networkCalls>=10);await new Promise(r=>setTimeout(r,100));assert(closedStreams>=3);
    console.log(`Chromium ${version}: HTTP, CORS, SSE, WebSocket, cancellation, timeout, downloads and diagnostics passed.`);
} finally { await browser?.close();for(const ws of wss.clients)ws.terminate();wss.close();server.closeAllConnections();await new Promise(r=>server.close(r)); }
