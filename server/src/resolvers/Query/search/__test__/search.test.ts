import { map, omit, length } from 'ramda';
import { context, db, clean } from '../../../../testConfig';
import fixtures from './fixtures';
import { search } from '../index';

afterEach(async () => {
  await clean();
});

test('should return films and comment matched by search word', async () => {
  const films = await Promise.all(
    map(data => db.mutation.createFilm({ data }, '{ id }'), fixtures.films)
  );

  const user = await db.mutation.createUser({ data: fixtures.user }, '{ id }');

  await db.mutation.createComment({
    data: {
      user: { connect: { id: user.id } },
      film: { connect: { id: films[0].id } },
      text: 'Foo',
    },
  });

  const result = await search(null, { search: 'Foo' }, context, null);

  expect(length(result)).toBe(2);

  expect(map(omit(['id']), result)).toMatchSnapshot();
});
