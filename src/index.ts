import { registerPlugin } from '@capacitor/core';

import type { InsomniaPlugin } from './definitions';

const Insomnia = registerPlugin<InsomniaPlugin>('Insomnia');

export * from './definitions';
export { Insomnia };
