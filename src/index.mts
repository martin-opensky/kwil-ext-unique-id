import { ExtensionBuilder, InitializeFn, logFn } from 'kwil-extensions';
import * as fs from 'fs';
import id from './id.mjs';
import date from './date.mjs';

const initialize: InitializeFn = async (
  metadata: Record<string, string>
): Promise<Record<string, string>> => {
  return metadata;
};

function startServer(): void {
  const port = process.env.EXTENSION_HELPERS_PORT || '50051';

  const server = new ExtensionBuilder()
    .named('helpers')
    .withInitializer(initialize)
    .withMethods({
      id,
      date,
    })
    .withLoggerFn(logger)
    .port(port)
    .build();

  process.on('SIGINT', () => {
    server.stop();
  });

  process.on('SIGTERM', () => {
    server.stop();
  });
}

const logger: logFn = (log: string, level: 'info' | 'error' | 'debug') => {
  fs.appendFileSync('logs.txt', log);
};

startServer();
