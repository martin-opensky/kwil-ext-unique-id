import { MethodFn } from 'kwil-extensions';
import { logger } from './logger';
import { nanoid } from 'nanoid';

export const generate: MethodFn = async ({ metadata, inputs }) => {
  const id = nanoid();

  logger(`Generating Id ${id}`, 'info');

  return id;
};
