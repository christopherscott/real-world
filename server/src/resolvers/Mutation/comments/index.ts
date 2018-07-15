import { Context } from '../../../utils';
import { AddCommentMutationArgs } from '../../../generated/types';

export const addComment = (
  parent,
  { input: { userId, filmId, text } }: AddCommentMutationArgs,
  context: Context,
  info
) => {
  return context.db.mutation.createComment(
    {
      data: {
        text,
        user: { connect: { id: userId } },
        film: { connect: { id: filmId } },
      },
    },
    info
  );
};
