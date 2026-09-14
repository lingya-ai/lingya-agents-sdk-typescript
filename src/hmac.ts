import { createHash, createHmac, randomBytes } from 'node:crypto';

/** 服务端 OpenAPI 凭证。Secret 不会被发送或写入异常。 / Trusted-server credentials; the secret is never transmitted. */
export interface OpenApiCredentials {
    /** 访问密钥标识。 / Access-key identifier. */
    accessKey: string;
    /** HMAC 密钥。 / HMAC secret. */
    secretKey: string;
}

/** 构造已签名 fetch；每次调用都会重新生成 timestamp、nonce 和签名。 / Creates a fetch function that signs every attempt independently. */
export function createSignedFetch(credentials: OpenApiCredentials, externalUserId: string): typeof fetch {
    const userBytes = Buffer.from(externalUserId, 'utf8');
    if (userBytes.length < 1 || userBytes.length > 256 || userBytes.includes(0)) {
        throw new Error('externalUserId must contain 1 to 256 UTF-8 bytes and no NUL');
    }
    const encodedUser = userBytes.toString('base64url');
    return async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
        const request = new Request(input, init);
        if (request.headers.has('Content-Encoding')) {
            throw new Error('Content-Encoding is not supported for signed requests');
        }
        const body = request.body === null ? new Uint8Array() : new Uint8Array(await request.clone().arrayBuffer());
        if (body.byteLength > 2 * 1024 * 1024) {
            throw new Error('request body exceeds the 2 MiB signing limit');
        }
        const url = new URL(request.url);
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const nonce = randomBytes(16).toString('base64url');
        const contentType = request.headers.get('Content-Type') ?? '';
        const canonical = [
            'OPENAPI-HMAC-SHA256-V1', credentials.accessKey, timestamp, nonce,
            request.method.toUpperCase(), url.pathname, url.search.slice(1), encodedUser, contentType,
            createHash('sha256').update(body).digest('hex'),
        ].join('\n');
        const headers = new Headers(request.headers);
        headers.set('X-OpenAPI-AK', credentials.accessKey);
        headers.set('X-OpenAPI-Timestamp', timestamp);
        headers.set('X-OpenAPI-Nonce', nonce);
        headers.set('X-OpenAPI-User', encodedUser);
        headers.set('X-OpenAPI-Signature', createHmac('sha256', credentials.secretKey).update(canonical).digest('hex'));
        return fetch(new Request(request, { headers }));
    };
}

/** 仅用于测试固定输入的签名计算。 / Computes a signature for deterministic golden-vector verification. */
export function signCanonical(secretKey: string, canonical: string): string {
    return createHmac('sha256', secretKey).update(canonical).digest('hex');
}
