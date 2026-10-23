import assert from 'node:assert/strict';
import test from 'node:test';
import {
    GeneratePreSignedUrlInputToJSON,
    GeneratePreSignedUrlOutputFromJSON,
} from '../src/models/index';

test('serializes the declared attachment size for presign', () => {
    const json = GeneratePreSignedUrlInputToJSON({
        fileName: 'attachment.txt',
        module: 'ai-chat-attachments',
        contentMd5: 'content-hash',
        sizeBytes: 25,
    });
    assert.equal(json.sizeBytes, 25);
});

test('decodes PUT and POST_FORM upload protocol fields', () => {
    const output = GeneratePreSignedUrlOutputFromJSON({
        support: true,
        fileUk: 'file-uk',
        url: 'https://storage.example/upload',
        uploadMethod: 'POST_FORM',
        formFields: { policy: 'policy-value' },
        maximumBytes: 25,
    });
    assert.equal(output.uploadMethod, 'POST_FORM');
    assert.deepEqual(output.formFields, { policy: 'policy-value' });
    assert.equal(output.maximumBytes, 25);
});
