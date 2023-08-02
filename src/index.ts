import { ExtensionBuilder, InitializeFn } from 'kwil-extensions';
import { generate } from './generate';
import { logger } from './logger';

const initialize: InitializeFn = async (
  metadata: Record<string, string>
): Promise<Record<string, string>> => {
  return metadata;
};

function startServer(): void {
  const server = new ExtensionBuilder()
    .named('unique_id')
    .withInitializer(initialize)
    .withMethods({
      generate,
    })
    .withLoggerFn(logger)
    .port('50051')
    .build();

  process.on('SIGINT', () => {
    server.stop();
  });

  process.on('SIGTERM', () => {
    server.stop();
  });
}

startServer();
