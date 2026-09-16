import type { AgentsUserClient } from '../src/client';

declare const user: AgentsUserClient;

user.chat.createChat({ query: '你好' });

// @ts-expect-error channelId is bound by AgentsClient and is not accepted here.
user.chat.createChat({ channelId: 'duplicate', aiChatInput: { query: '你好' } });
