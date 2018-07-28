import {
  compose,
  map,
  zip,
  mergeAll,
  times,
  filter,
  find,
  equals,
  prop,
  propOr,
  replace,
  defaultTo,
  unnest,
} from 'ramda';
import download from './utils/download';
import callApi from './utils/api';
import { toISO, toMS } from './utils/date';
import { API } from './types';
import config from '../config';
import {
  Prisma,
  RatingSource,
  MovieCreateInput,
} from '../src/generated/prisma';

const db: Prisma = new Prisma({
  endpoint: config.PRISMA_ENDPOINT,
  secret: config.PRISMA_SECRET,
});

const beforeSeed = async () => {
  await db.mutation.deleteManyGenres({});
  await db.mutation.deleteManyRatings({});
  await db.mutation.deleteManyMovies({});
};

const seedGenres = async () => {
  const { genres }: { genres: { id: string; name: string }[] } = await callApi(
    API.TMDB,
    'genre/movie/list'
  );

  const data = await Promise.all(
    map(({ name }) => db.mutation.createGenre({ data: { name } }), genres)
  );

  return compose(
    mergeAll,
    map(([{ id: key }, { id: val }]) => ({ [key]: val })),
    zip(genres)
  )(data);
};

const getRatings = (
  ratings: { Source: string; Value: string }[]
): { source: RatingSource; value: string | null }[] => {
  const sources = [
    ['Internet Movie Database', 'IMDb'],
    ['Rotten Tomatoes', 'RottenTomatoes'],
    ['Metacritic', 'MetaCritic'],
  ];

  return map(([key, source]) => {
    const rating = find(
      compose(
        equals(key),
        prop('Source')
      ),
      ratings
    );

    return { source, value: propOr(null, 'Value', rating) as string | null };
  })(sources);
};

const saveImage = async (img, type) => {
  await download('https://image.tmdb.org/t/p/w500', img, `./static/${type}`);

  return `${type}${img}`;
};

const getMovie = async (movie, genreIds) => {
  const {
    title,
    overview,
    popularity,
    release_date,
    poster_path,
    genre_ids,
  } = movie;

  const {
    Title: response,
    Director: director,
    Actors: actors,
    Ratings,
    Runtime,
  } = await callApi(API.OMDB, '', { t: title });

  let poster;

  try {
    poster = await saveImage(poster_path, 'posters');
  } catch {
    poster = 'posters/not_found.jpg';
  }

  if (response) {
    return {
      title,
      overview,
      popularity,
      director,
      actors,
      poster,
      releaseDate: toISO(release_date),
      runtime: compose(
        toISO,
        toMS,
        defaultTo(0),
        Number,
        replace(/ min/, '')
      )(Runtime),
      genres: map(id => ({ id: genreIds[id] }), genre_ids),
      ratings: getRatings(Ratings),
    };
  }
};

const saveMovie = async ({ genres, ratings, ...movie }) => {
  const ratingIds = await Promise.all(
    map(data => db.mutation.createRating({ data }, '{ id }'), ratings)
  );

  await db.mutation.createMovie({
    data: {
      ...(movie as MovieCreateInput),
      genres: { connect: genres },
      ratings: { connect: ratingIds },
    } as MovieCreateInput,
  });
};

const getMovies = async page => {
  const { results } = await callApi(API.TMDB, 'movie/popular', { page });

  return results;
};

const seedMovies = async (genres, pages) => {
  const movies = await Promise.all(times(i => getMovies(i + 1), pages));

  const data = await Promise.all(
    map(movie => getMovie(movie, genres), compose(
      filter(Boolean),
      unnest
    )(movies) as {}[])
  );

  await Promise.all(map(saveMovie, filter(Boolean, data)));
};

(async () => {
  await beforeSeed();

  const genres = await seedGenres();

  await seedMovies(genres, 15);
})();
