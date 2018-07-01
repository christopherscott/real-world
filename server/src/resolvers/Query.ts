import { Context } from '../utils';

const posts = (parent, args, context: Context, info) => {
  return context.db.query.posts({}, info);
};

const post = (parent, { id }: { id: string }, context: Context, info) => {
  return context.db.query.post({ where: { id } }, info);
};

const search = (
  parent,
  { search }: { search?: string },
  context: Context,
  info
) => {
  return context.db.query.posts(
    {
      where: { OR: [{ text_contains: search }, { title_contains: search }] },
    },
    info
  );
};

export default {
  posts,
  post,
  search,
};
