export interface InsomniaPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
