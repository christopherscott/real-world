import { Context } from '../../../utils';
import { Film } from '../../../generated/types';

export default {
  films(parent, args, context: Context, info) {
    // Order by multiple fields is not supported yet by Prisma
    // https://github.com/prismagraphql/prisma/issues/62
    return context.db.query.films({ orderBy: 'rating_DESC' }, info);
  },
  film(parent, { id }: { id: Film['id'] }, context: Context, info) {
    return context.db.query.film({ where: { id } }, info);
  },
};
