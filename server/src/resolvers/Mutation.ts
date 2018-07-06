import { Context } from '../utils';
import { User, Film, Comment } from '../generated/prisma';

const addComment = (
  parent,
  {
    userId,
    filmId,
    text,
  }: { userId: User['id']; filmId: Film['id']; text: Comment['text'] },
  context: Context,
  info
) =>
  context.db.mutation.createComment(
    {
      data: {
        text,
        user: { connect: { id: userId } },
        film: { connect: { id: filmId } },
      },
    },
    info
  );

export default {
  addComment,
};
