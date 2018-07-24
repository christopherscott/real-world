import { map, omit, length } from 'ramda';
import { context, db, clean } from '../../config';
import fixtures from '../../fixtures';
import { search } from '../../../src/resolvers/Query/search';

afterEach(async () => {
  await clean();
});

test('should return movies matched by search word', async () => {
  const films = await Promise.all(
    map(data => db.mutation.createMovie({ data }, '{ id }'), fixtures.movies)
  );

  const result = await search(null, { search: 'IMF' }, context, null);

  expect(length(result)).toBe(1);

  expect(map(omit(['id']), result)).toMatchSnapshot();
});
