import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const modelDir = fileURLToPath(new URL('../src/models/', import.meta.url));
const violations = [];
for (const name of readdirSync(modelDir).filter((file) => file.endsWith('.ts'))) {
  const source = readFileSync(join(modelDir, name), 'utf8');
  const interfaceBlocks = source.match(/export interface [\s\S]*?\n}/g) ?? [];
  for (const block of interfaceBlocks) {
    if (/\bany\b|Record\s*</.test(block)) violations.push(name);
  }
}
if (violations.length > 0) throw new Error(`Dynamic public model fields: ${[...new Set(violations)].join(', ')}`);
console.log('TypeScript public model audit passed.');
