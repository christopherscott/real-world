import { omit } from 'ramda';
import { context, db, clean } from '../../../../testConfig';
import fixtures from './fixtures';
import { addComment } from '..';

afterEach(async () => {
  await clean();
});

test('should return films and comment matched by search word', async () => {
  const { id: filmId } = await db.mutation.createFilm(
    { data: fixtures.film },
    '{ id }'
  );

  const { id: userId } = await db.mutation.createUser(
    { data: fixtures.user },
    '{ id }'
  );

  const result = await addComment(
    null,
    { input: { userId, filmId, text: 'Foo' } },
    context,
    null
  );

  expect(omit(['id'], result)).toMatchSnapshot();
});
