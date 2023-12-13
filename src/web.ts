import { WebPlugin } from '@capacitor/core';

import type { InsomniaPlugin } from './definitions';

export class InsomniaWeb extends WebPlugin implements InsomniaPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
