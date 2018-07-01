import { Context } from '../utils';

const createPost = (
  parent,
  { title, text }: { title: string; text: string },
  context: Context,
  info
) => context.db.mutation.createPost({ data: { title, text } }, info);

const deletePost = (parent, { id }: { id: string }, context: Context, info) =>
  context.db.mutation.deletePost({ where: { id } }, info);

export default {
  createPost,
  deletePost,
};
