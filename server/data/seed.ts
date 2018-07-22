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

const getMovie = async (id, genreIds) => {
  const {
    imdb_id,
    title,
    overview,
    popularity,
    release_date,
    poster_path,
    backdrop_path,
    genres,
    runtime,
    revenue,
  } = await callApi(API.TMDB, `movie/${id}`);

  const {
    Title: response,
    Director: director,
    Actors: actors,
    Ratings,
  } = await callApi(API.OMDB, '', { i: imdb_id });

  if (response) {
    return {
      title,
      overview,
      popularity,
      revenue,
      director,
      actors,
      poster: await saveImage(poster_path, 'posters'),
      backdrop: await saveImage(backdrop_path, 'backdrops'),
      releaseDate: toISO(release_date),
      runtime: compose(
        toISO,
        toMS
      )(runtime),
      genres: map(({ id }) => ({ id: genreIds[id] }), genres),
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

const seedMovies = async (genres, pages) => {
  times(async i => {
    const { results } = await callApi(API.TMDB, 'movie/popular', {
      page: i + 1,
      language: 'en-US',
    });

    const data = await Promise.all(
      map(({ id }) => getMovie(id, genres), results)
    );

    await Promise.all(map(saveMovie, data));
  }, pages);
};

(async () => {
  await beforeSeed();

  const genres = await seedGenres();

  await seedMovies(genres, 1);
})();
