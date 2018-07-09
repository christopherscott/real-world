import { GraphQLClient } from 'graphql-request';
import { Prisma } from './generated/prisma';

const database = new Prisma({
  endpoint: 'http://localhost:4466',
  secret: 'mysecret123',
});

export const client = new GraphQLClient(`http://localhost:4000`);

export const db = {
  clean: async () => {
    await database.mutation.deleteManyGenres({});
    await database.mutation.deleteManyComments({});
    await database.mutation.deleteManyPersons({});
    await database.mutation.deleteManyFilms({});
  },
  ...database,
};
