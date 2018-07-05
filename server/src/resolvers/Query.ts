import { Context } from '../utils';

const films = (parent, args, context: Context, info) => {
  return context.db.query.films({ orderBy: 'rating_DESC' }, info);
};

const film = (parent, { id }: { id: string }, context: Context, info) => {
  return context.db.query.film({ where: { id } }, info);
};

// TODO: Use elasticsearch
const search = (
  parent,
  { search }: { search?: string },
  context: Context,
  info
) => {
  return context.db.query.films(
    {
      where: { OR: [{ title_contains: search }, { plot_contains: search }] },
    },
    info
  );
};

export default {
  films,
  film,
  search,
};
