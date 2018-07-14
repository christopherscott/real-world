// import { db, client } from '../../../../testConfig';
// import film from './fixtures/film';
// import user from './fixtures/user';

// afterEach(async () => {
//   await db.clean();
// });

// test('should add comment', async () => {
//   const { id: filmId } = await db.mutation.createFilm({ data: film }, '{ id }');

//   const { id: userId } = await db.mutation.createUser({ data: user }, '{ id }');

//   const query = `
//     mutation {
//       addComment(input: {
//         filmId: "${filmId}",
//         userId: "${userId}",
//         text: "Foo Baz"
//       }) {
//         text
//       }
//     }
//   `;

//   const responseData = await client.request(query);

//   expect(responseData).toMatchSnapshot();
// });
