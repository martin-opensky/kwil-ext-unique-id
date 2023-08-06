import { MethodFn } from 'kwil-extensions';
import { DateTime } from 'luxon';

const date: MethodFn = async ({ metadata, inputs }) => {
  const dateString = inputs[0]?.toString();
  const dbFormat = 'yyyy-MM-dd HH:mm:ss';

  if (!dateString || dateString === 'now') {
    return DateTime.utc().toFormat(dbFormat); // default is now
  }

  try {
    const date = DateTime.fromSQL(dateString).toFormat(dbFormat);

    // TODO: add support for intervals i.e. + 1 day, - 1 week, etc.

    return date;
  } catch (err) {
    throw new Error(`Invalid date: ${dateString}`);
  }
};

export default date;
