export interface InsomniaPlugin {
  /**
   * 保持应用程序唤醒
   */
  keepAwake(): Promise<any>;

  /**
   * 允许应用程序再次休眠
   */
  allowSleepAgain(): Promise<any>;
}
