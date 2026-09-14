import assert from 'node:assert/strict';
import test from 'node:test';
import { decodeAiChatBriefEvent, decodeToolExtension } from '../src/events';

test('preserves unknown event JSON', () => {
    const raw = '{"type":"future-event","value":42}';
    assert.deepEqual(decodeAiChatBriefEvent(raw), { type: 'future-event', rawJson: raw });
});

test('preserves unknown tool-extension JSON', () => {
    const raw = '{"category":"future-tool","content":{"value":42}}';
    assert.deepEqual(decodeToolExtension(raw), { category: 'future-tool', rawJson: raw });
});

test('recognizes every published tool-extension category', () => {
    const categories = [
        'planApproval', 'askUserQuestion', 'imageGeneration', 'sqlQuery', 'sqlQueryResult', 'sqlChartResult',
        'mathFormula', 'mathResult', 'jsRunScript', 'jsRunScriptResult', 'skillResource', 'taskProgress',
    ];
    for (const category of categories) {
        const raw = JSON.stringify({ category });
        assert(!('rawJson' in decodeToolExtension(raw)), category);
    }
});
