import { Context } from '../../../utils';

// TODO: Use elasticsearch
export const search = async (
  parent,
  { search }: { search: string },
  context: Context,
  info
) => {
  const movies = await context.db.query.movies(
    {
      where: {
        OR: [{ title_contains: search }, { overview_contains: search }],
      },
    },
    info
  );

  // const comments = await context.db.query.comments(
  //   {
  //     where: { OR: [{ text_contains: search }] },
  //   },
  //   info
  // );

  // return [...films, ...comments];

  return movies;
};
