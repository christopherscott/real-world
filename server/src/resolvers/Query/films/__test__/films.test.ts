import { map, omit, length } from 'ramda';
import { context, db, clean } from '../../../../testConfig';
import fixtures from './fixtures';
import { films, film } from '../index';

afterEach(async () => {
  await clean();
});

test('should return films ordered by raiting', async () => {
  await Promise.all(
    map(data => db.mutation.createFilm({ data }), fixtures.films)
  );

  const result = await films(null, null, context, null);

  expect(length(result)).toBe(5);

  expect(map(omit(['id']), result)).toMatchSnapshot();
});

test('should return film', async () => {
  const { id } = await db.mutation.createFilm(
    { data: fixtures.films[0] },
    '{ id }'
  );

  const result = await film(null, { id }, context, null);

  expect(omit(['id'], result)).toMatchSnapshot();
});
