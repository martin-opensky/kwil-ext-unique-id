import { MethodFn } from 'kwil-extensions';
import { nanoid } from 'nanoid';

const id: MethodFn = async ({ metadata, inputs }) => {
  const id = nanoid();

  return id;
};

export default id;
