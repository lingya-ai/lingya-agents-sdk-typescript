/**
 * Verifies the exact npm tarball instead of importing the repository build directly.
 *
 * This catches missing package files, broken export metadata, and declaration-resolution
 * regressions before a release reaches npm.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const repositoryRoot = resolve(import.meta.dirname, '..');
const npmCli = process.env.npm_execpath;
if (npmCli === undefined || npmCli.length === 0) {
  throw new Error('package-smoke.mjs must be invoked through an npm script');
}

const consumerRoot = mkdtempSync(join(tmpdir(), 'lingya-agents-sdk-consumer-'));
let tarballPath;

function runNpm(argumentsList, workingDirectory = repositoryRoot) {
  return execFileSync(process.execPath, [npmCli, ...argumentsList], {
    cwd: workingDirectory,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
  });
}

try {
  const packResult = JSON.parse(runNpm(['pack', '--json', '--ignore-scripts']));
  tarballPath = resolve(repositoryRoot, packResult[0].filename);
  runNpm([
    'install',
    tarballPath,
    '--ignore-scripts',
    '--no-audit',
    '--no-fund',
    '--registry=https://registry.npmmirror.com',
  ], consumerRoot);

  execFileSync(process.execPath, [
    '-e',
    "const sdk = require('@lingya-ai/agents-sdk'); if (typeof sdk.LingyaAgentsClient !== 'function') throw new Error('CommonJS export missing');",
  ], { cwd: consumerRoot, stdio: 'inherit' });

  execFileSync(process.execPath, [
    '--input-type=module',
    '-e',
    "import('@lingya-ai/agents-sdk').then((sdk) => { if (typeof sdk.LingyaAgentsClient !== 'function') throw new Error('ES module export missing'); });",
  ], { cwd: consumerRoot, stdio: 'inherit' });

  writeFileSync(join(consumerRoot, 'consumer.ts'), `
import { LingyaAgentsClient, type LingyaAiChatBriefEvent } from '@lingya-ai/agents-sdk';

const client = new LingyaAgentsClient('https://tenant.example.com', 'channel-id', {
  accessKey: 'test-access-key',
  secretKey: 'test-secret-key',
});
const user = client.forUser('external-user-id');
declare const event: LingyaAiChatBriefEvent;
void user.chat;
void event.type;
`);
  writeFileSync(join(consumerRoot, 'tsconfig.json'), JSON.stringify({
    compilerOptions: {
      module: 'NodeNext',
      moduleResolution: 'NodeNext',
      strict: true,
      noEmit: true,
      target: 'ES2022',
    },
    files: ['consumer.ts'],
  }));

  const typescriptPackage = JSON.parse(readFileSync(join(repositoryRoot, 'node_modules', 'typescript', 'package.json'), 'utf8'));
  execFileSync(process.execPath, [join(repositoryRoot, 'node_modules', 'typescript', typescriptPackage.bin.tsc), '--project', 'tsconfig.json'], {
    cwd: consumerRoot,
    stdio: 'inherit',
  });

  console.log('npm tarball CommonJS, ES module, and TypeScript declaration smoke tests passed.');
} finally {
  rmSync(consumerRoot, { recursive: true, force: true });
  if (tarballPath !== undefined) rmSync(tarballPath, { force: true });
}
