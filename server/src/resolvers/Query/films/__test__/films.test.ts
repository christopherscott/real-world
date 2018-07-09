import { map } from 'ramda';
import { db, client } from '../../../../testConfig';
import films from './fixtures/films';

afterEach(async () => {
  await db.clean();
});

test('should return films ordered by raiting', async () => {
  await Promise.all(map(data => db.mutation.createFilm({ data }), films));

  const query = `
    query {
      films {
        title
        rating
      }
    }
  `;

  const responseData = await client.request(query);

  expect(responseData).toMatchSnapshot();
});

test('should return film', async () => {
  const { id } = await db.mutation.createFilm({ data: films[0] });

  const query = `
    query {
      film(id: "${id}") {
        title
        rating
      }
    }
  `;

  const responseData = await client.request(query);

  expect(responseData).toMatchSnapshot();
});
