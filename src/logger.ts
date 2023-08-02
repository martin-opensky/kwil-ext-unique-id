import * as fs from 'fs';
import { logFn } from 'kwil-extensions';

export const logger: logFn = (
  log: string,
  level: 'info' | 'error' | 'debug'
) => {
  fs.appendFileSync('logs.txt', log);
};
