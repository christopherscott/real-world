import { forwardTo } from 'prisma-binding';

export const movies = async (parent, args, context, info) => {
  const moviesConnection = await context.db.query.moviesConnection(args, info);

  return moviesConnection;
};

export const movie = forwardTo('db');
