import { Prisma } from '../src/generated/prisma';

export const db = new Prisma({ endpoint: 'http://localhost:4477' });

export const context = { db, request: {} };

export const clean = async () => {
  await db.mutation.deleteManyGenres({});
  await db.mutation.deleteManyRatings({});
  await db.mutation.deleteManyMovies({});
};
