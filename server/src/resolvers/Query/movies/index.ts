import { Context } from '../../../utils';
import { ID_Input } from '../../../generated/prisma';

export const movies = (parent, args, context: Context, info) => {
  // Order by multiple fields is not supported yet
  // https://github.com/prismagraphql/prisma/issues/62
  return context.db.query.movies({ orderBy: 'popularity_DESC' }, info);
};

export const movie = (
  parent,
  { id }: { id: ID_Input },
  context: Context,
  info
) => {
  return context.db.query.movie({ where: { id } }, info);
};
