import { Context } from '../../../utils';
import { Film } from '../../../generated/prisma';

// TODO: Use elasticsearch
export default {
  search: async (
    parent,
    { search }: { search: string },
    context: Context,
    info
  ) => {
    const films = await context.db.query.films(
      {
        where: { OR: [{ title_contains: search }, { plot_contains: search }] },
      },
      info
    );

    const comments = await context.db.query.comments(
      {
        where: { OR: [{ text_contains: search }] },
      },
      info
    );

    return [...films, ...comments];
  },
};
