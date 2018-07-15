import { Context } from '../../../utils';
import { SearchQueryArgs } from '../../../generated/types';

// TODO: Use elasticsearch
export const search = async (
  parent,
  { search }: SearchQueryArgs,
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
};
