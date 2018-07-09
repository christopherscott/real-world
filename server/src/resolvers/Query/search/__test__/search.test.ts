import { map } from 'ramda';
import { db, client } from '../../../../testConfig';
import films from './fixtures/films';
import user from './fixtures/user';

afterEach(async () => {
  await db.clean();
});

test('should return films and comment matched by search word', async () => {
  const filmIds = await Promise.all(
    map(data => db.mutation.createFilm({ data }, '{ id }'), films)
  );

  const { id: userId } = await db.mutation.createUser({ data: user }, '{ id }');

  await db.mutation.createComment({
    data: {
      user: { connect: { id: userId } },
      film: { connect: { id: filmIds[0].id } },
      text: 'Foo',
    },
  });

  const query = `
    query {
      search(search: "Foo") {
        ... on Film {
          title
          plot
          rating
        }
        ... on Comment {
          text
        }
      }
    }
  `;

  const responseData = await client.request(query);

  expect(responseData).toMatchSnapshot();
});
