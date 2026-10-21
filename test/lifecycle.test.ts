import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';
import { AgentsClient } from '../src/browser';
import { ApiError, downloadResponse } from '../src/lifecycle';
import { decodeSse } from '../src/sse';
const root = { baseUrl: 'https://example.test', channelId: 'c' };
test('cancel and timeout stop waiting for tokens without sending a late token', async () => {
    let sends = 0, resolve!: (s: string) => void;
    const abort = new AbortController();
    const client = new AgentsClient({...root, fetch: async () => { sends++; return new Response('{}'); }, auth: {type:'token', tokenProvider:()=> new Promise(r=>{resolve=r;})}});
    const pending = client.configuration.getAgentsConfig({signal:abort.signal});
    await new Promise(r=>setTimeout(r,5)); abort.abort();
    await assert.rejects(pending,(e:ApiError)=>e.kind==='cancelled'); resolve('late');
    await new Promise(r=>setTimeout(r,5)); assert.equal(sends,0);
    await assert.rejects(client.configuration.getAgentsConfig({timeoutMs:10}),(e:ApiError)=>e.kind==='timeout');
});
test('HTTP error classification exposes validation and request identity', async () => {
    const client = new AgentsClient({...root, fetch:async()=>new Response('{"code":"EXPIRED","message":"expired","fields":[{"field":"title","message":"required"}]}',{status:410,headers:{'X-Request-ID':'server'}}), auth:{type:'token',tokenProvider:()=> 'fresh'}});
    await assert.rejects(client.configuration.getAgentsConfig(),(e:ApiError)=>e.kind==='http' && e.status===410 && e.code==='EXPIRED' && e.fields?.[0].field==='title' && e.requestId==='server');
});
test('End closes an open SSE body without waiting for another event', async () => {
    let cancelled=false;
    const client = new AgentsClient({...root,fetch:async()=>new Response(new ReadableStream({start(c){c.enqueue(new TextEncoder().encode('data: {"type":"end","totalUsage":{},"executionTimeMillis":0,"artifacts":[],"nonFileArtifacts":[]}\n\n'));},cancel(){cancelled=true;}}),{headers:{'Content-Type':'text/event-stream'}}),auth:{type:'token',tokenProvider:()=> 'fresh'}});
    const sub=client.chat.subscribeChatEvents('c',{messageId:'m'});
    assert.equal((await sub.closed).reason,'end'); assert.equal(cancelled,true);
    let count=0;for await(const event of sub){assert.equal(event.type,'end');count++;}assert.equal(count,1);
});
test('SSE drops an incomplete frame and cancels the reader on exit',async()=>{
    const response=new Response('data: complete\r\n\r\ndata: partial',{headers:{'Content-Type':'text/event-stream'}});
    const values=[];for await(const value of decodeSse(response))values.push(value);assert.deepEqual(values,['complete']);
    await assert.rejects(async()=>{for await(const value of decodeSse(new Response('html')))void value;},(e:ApiError)=>e.kind==='protocol');
});
test('download metadata keeps UTF8 filename and raw bytes',async()=>{
    const value=await downloadResponse(new Response(new Uint8Array([0,255]),{headers:{'Content-Disposition':"attachment; filename=report.csv; filename*=UTF-8''%E4%B8%AD.csv"}}));
    assert.equal(value.filename,'中.csv');assert.deepEqual([...value.bytes],[0,255]);
});

test('shared lifecycle HTTP vectors retain status, fields and server request ID', async () => {
    const vectors = JSON.parse(readFileSync(new URL('../test-vectors/lifecycle-v1.json', import.meta.url), 'utf8'));
    for (const vector of vectors.httpErrors) {
        const client = new AgentsClient({...root, fetch:async()=>new Response(JSON.stringify(vector.body), {status:vector.status, headers:{'X-Request-ID':vector.requestId}}), auth:{type:'token', tokenProvider:()=> 'fresh'}});
        await assert.rejects(client.configuration.getAgentsConfig(), (e:ApiError)=> e.kind==='http' && e.status===vector.status && e.code===vector.body.code && e.requestId===vector.requestId && e.fields?.[0].field==='title');
    }
});
test('timeout cancels an injected response body that ignores Fetch signal', async () => {
    let cancelled = false;
    const client = new AgentsClient({...root, fetch:async()=>new Response(new ReadableStream({cancel(){cancelled=true;}}), {headers:{'Content-Type':'application/json'}}), auth:{type:'token', tokenProvider:()=> 'fresh'}});
    await assert.rejects(client.configuration.getAgentsConfig({timeoutMs:20}), (e:ApiError)=>e.kind==='timeout');
    assert.equal(cancelled,true);
});

test('finite probes allow EOF and enforce a separate idle timeout', async () => {
    const normal = new AgentsClient({...root, fetch:async()=>new Response(':ready\r\n\r\n',{headers:{'Content-Type':'text/event-stream'}}), auth:{type:'token',tokenProvider:()=> 'fresh'}});
    const reasons: Array<string | undefined> = [];
    for await (const event of normal.chat.probeEventStream({probeId:'p'}, {onConnectionEvent:event=>{if(event.type==='closed')reasons.push(event.reason);}})) void event;
    assert.deepEqual(reasons,['normal']);
    let cancelled = false;
    const stalled = new AgentsClient({...root, fetch:async()=>new Response(new ReadableStream({cancel(){cancelled=true;}}),{headers:{'Content-Type':'text/event-stream'}}), auth:{type:'token',tokenProvider:()=> 'fresh'}});
    await assert.rejects(async()=>{for await(const event of stalled.chat.probeEventStream({probeId:'p'},{idleTimeoutMs:20}))void event;},(error:ApiError)=>error.kind==='timeout');
    assert.equal(cancelled,true);
});
