import { curry, compose, fromPairs, map, adjust, toPairs } from 'ramda';

export const renameBy = curry((fn: (string) => string, obj) =>
  compose(
    fromPairs,
    map(adjust(fn, 0)),
    toPairs
  )(obj)
);
