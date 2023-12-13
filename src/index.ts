import { registerPlugin } from '@capacitor/core';

import type { InsomniaPlugin } from './definitions';

const Insomnia = registerPlugin<InsomniaPlugin>('Insomnia', {
  web: () => import('./web').then(m => new m.InsomniaWeb()),
});

export * from './definitions';
export { Insomnia };
