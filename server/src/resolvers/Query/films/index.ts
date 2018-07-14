import { Context } from '../../../utils';
import { Film } from '../../../generated/types';

export const films = (parent, args, context: Context, info) => {
  // Order by multiple fields is not supported yet
  // https://github.com/prismagraphql/prisma/issues/62
  return context.db.query.films({ orderBy: 'rating_DESC' }, info);
};

export const film = (
  parent,
  { id }: { id: Film['id'] },
  context: Context,
  info
) => {
  return context.db.query.film({ where: { id } }, info);
};
