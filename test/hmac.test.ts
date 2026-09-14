import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { signCanonical } from '../src/hmac';

interface Vector { secret: string; canonical: string; signature: string }
interface Vectors { cases: Vector[] }

test('matches every published HMAC golden vector', async () => {
    const path = new URL('../../lingya-agents-openapi/test-vectors/hmac-v1.json', import.meta.url);
    const fixture = JSON.parse(await readFile(path, 'utf8')) as Vectors;
    for (const vector of fixture.cases) assert.equal(signCanonical(vector.secret, vector.canonical), vector.signature);
});
