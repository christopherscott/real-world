import { map } from 'ramda';
import { db, client } from '../../config';
import films from './fixtures/films';

beforeEach(async () => {
  await Promise.all(map(data => db.mutation.createFilm({ data }), films));
});

afterEach(async () => {
  await db.mutation.deleteManyFilms({});
});

test('should return films ordered by raiting', async () => {
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
