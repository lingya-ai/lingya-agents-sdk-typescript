import type { LingyaAgentsUserClient } from '../src/client';

declare const user: LingyaAgentsUserClient;

user.chat.createChat({ query: '你好' });

// @ts-expect-error channelId is bound by LingyaAgentsClient and is not accepted here.
user.chat.createChat({ channelId: 'duplicate', aiChatInput: { query: '你好' } });
