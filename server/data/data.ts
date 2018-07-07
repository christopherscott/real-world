import { readdirSync, readFileSync } from 'fs';
import {
  curry,
  assoc,
  keys,
  reduce,
  compose,
  fromPairs,
  map,
  adjust,
  toPairs,
  multiply,
  sum,
  over,
  lensProp,
  lensIndex,
  split,
  trim,
  toLower,
  pick,
  replace,
  concat,
} from 'ramda';

type Film = {
  title: string;
  year: string;
  runtime: string;
  plot: string;
  poster: string;
  rating: number;
  votes: number;
  genres: string[];
  directors: string[];
  writers: string[];
  actors: string[];
};

const toISO = (date: string | number): string => new Date(date).toISOString();

const renameKeys = curry((keysMap, obj) =>
  reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj))
);

const renameBy = curry((fn: (string) => string, obj) =>
  compose(
    fromPairs,
    map(adjust(fn, 0)),
    toPairs
  )(obj)
);

const toMS = compose(
  multiply(60000),
  sum,
  over(lensIndex(0), multiply(60)),
  map(Number),
  ([h, , m = 0]) => [h, m],
  split(' ')
);

const toArray = compose(
  map(trim),
  split(',')
);

const toJSON = compose(
  JSON.parse,
  readFileSync,
  concat('./data/json/')
);

const normalizeKeys = compose(
  renameKeys({
    imdbrating: 'rating',
    imdbvotes: 'votes',
    genre: 'genres',
    director: 'directors',
    writer: 'writers',
  }),
  renameBy(toLower),
  pick([
    'Title',
    'Year',
    'Runtime',
    'Plot',
    'Poster',
    'imdbRating',
    'imdbVotes',
    'Genre',
    'Director',
    'Writer',
    'Actors',
  ])
);

const normalizeDates = compose(
  over(
    lensProp('runtime'),
    compose(
      toISO,
      toMS
    )
  ),
  over(lensProp('year'), toISO)
);

const normalizeNumbers = compose(
  over(
    lensProp('votes'),
    compose(
      Number,
      replace(/,/g, '')
    )
  ),
  over(lensProp('rating'), parseFloat)
);

const normalizeArrays = compose(
  over(lensProp('actors'), toArray),
  over(lensProp('writers'), toArray),
  over(lensProp('directors'), toArray),
  over(
    lensProp('genres'),
    compose(
      toArray,
      toLower
    )
  )
);

const normalizeValues = compose(
  normalizeArrays,
  normalizeNumbers,
  normalizeDates
);

const data = map(
  compose(
    normalizeValues,
    normalizeKeys,
    toJSON
  ),
  readdirSync('./data/json')
);

export default data as Film[];
