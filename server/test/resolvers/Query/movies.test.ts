import { map, omit, length } from 'ramda';
import { context, db, clean } from '../../config';
import fixtures from '../../fixtures';
import { movies, movie } from '../../../src/resolvers/Query/movies';

afterEach(async () => {
  await clean();
});

test('should return movies ordered by raiting', async () => {
  await Promise.all(
    map(data => db.mutation.createMovie({ data }), fixtures.movies)
  );

  const result = await movies(null, null, context, null);

  expect(length(result)).toBe(5);

  expect(map(omit(['id']), result)).toMatchSnapshot();
});

test('should return movie', async () => {
  const { id } = await db.mutation.createMovie(
    { data: fixtures.movies[0] },
    '{ id }'
  );

  const result = await movie(null, { id }, context, null);

  expect(omit(['id'], result)).toMatchSnapshot();
});
