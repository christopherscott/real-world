import { writeFile, access, constants } from 'fs';
import * as retry from 'async-retry';
import { promisify } from 'util';
import * as download from 'download';

const writeFileAsync = promisify(writeFile);

const existsAsync = path =>
  Promise.resolve(access(path, constants.F_OK, err => Boolean(err)));

export default async (url: string, name: string, path: string) => {
  const exists = await existsAsync(`${path}${name}`);

  if (!exists) {
    const file = await retry(
      async () => {
        const data = await download(`${url}${name}`);

        return data;
      },
      { retries: 2 }
    );

    await writeFileAsync(`${path}${name}`, file);
  }
};
