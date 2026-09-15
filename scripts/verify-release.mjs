/**
 * Rejects release tags that do not exactly match package.json.
 *
 * Keeping this check in a small script makes local and CI release validation identical.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const packageJson = JSON.parse(readFileSync(resolve(import.meta.dirname, '..', 'package.json'), 'utf8'));
const tag = process.argv[2];
const expectedTag = `v${packageJson.version}`;

if (tag !== expectedTag) {
  throw new Error(`Release tag ${tag ?? '<missing>'} does not match ${expectedTag}`);
}

if (packageJson.name !== '@lingya-ai/agents-sdk') {
  throw new Error(`Unexpected package name: ${packageJson.name}`);
}

console.log(`${packageJson.name}@${packageJson.version}`);
