import { writeFile, access, constants } from 'fs';
import { promisify } from 'util';
import * as download from 'download';

const writeFileAsync = promisify(writeFile);

const existsAsync = path =>
  Promise.resolve(access(path, constants.F_OK, err => Boolean(err)));

export default async (url: string, name: string, path: string) => {
  const exists = await existsAsync(`${path}${name}`);

  if (!exists) {
    const file = await download(`${url}${name}`);

    await writeFileAsync(`${path}${name}`, file);
  }
};
