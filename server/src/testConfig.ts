import { Prisma } from './generated/prisma';

export const db = new Prisma({ endpoint: 'http://localhost:4477' });

export const context = { db, request: {} };

export const clean = async () => {
  await db.mutation.deleteManyGenres({});
  await db.mutation.deleteManyComments({});
  await db.mutation.deleteManyPersons({});
  await db.mutation.deleteManyFilms({});
};
