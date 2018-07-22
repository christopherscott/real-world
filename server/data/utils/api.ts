import fetch from 'node-fetch';
import * as retry from 'async-retry';
import { stringify } from 'query-string';
import { cond, equals, always } from 'ramda';
import config from '../../config';
import { API } from '../types';

const apiKey: (api: API) => { [key: string]: string } = cond([
  [equals(API.TMDB), always({ api_key: config.TMDB_KEY })],
  [equals(API.OMDB), always({ apiKey: config.OMDB_KEY })],
]);

export default async (
  api: API,
  endpoint: string = '',
  params: { [key: string]: string | number } = {}
) => {
  const url = `${api}/${endpoint}?${stringify({ ...params, ...apiKey(api) })}`;

  const data = await retry(
    async () => {
      const res = await fetch(url);

      const data = await res.json();

      return data;
    },
    { retries: 2 }
  );

  return data;
};
