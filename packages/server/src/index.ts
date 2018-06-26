import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';

const resolvers = {
  Query: {
    posts: (_: any, args: any, context: any, info: any) => {
      return context.prisma.query.posts(
        {
          where: {
            OR: [
              { title_contains: args.searchString },
              { content_contains: args.searchString },
            ],
          },
        },
        info
      );
    },
    user: (_: any, args: any, context: any, info: any) => {
      console.log(info);
      return context.prisma.query.user(
        {
          where: {
            id: args.id,
          },
        },
        info
      );
    },
  },
  Mutation: {
    createDraft: (_: any, args: any, context: any, info: any) => {
      return context.prisma.mutation.createPost(
        {
          data: {
            title: args.title,
            content: args.title,
            author: {
              connect: {
                id: args.authorId,
              },
            },
          },
        },
        info
      );
    },
    publish: (_: any, args: any, context: any, info: any) => {
      return context.prisma.mutation.updatePost(
        {
          where: {
            id: args.id,
          },
          data: {
            published: true,
          },
        },
        info
      );
    },
    deletePost: (_: any, args: any, context: any, info: any) => {
      return context.prisma.mutation.deletePost(
        {
          where: {
            id: args.id,
          },
        },
        info
      );
    },
    signup: (_: any, args: any, context: any, info: any) => {
      return context.prisma.mutation.createUser(
        {
          data: {
            name: args.name,
          },
        },
        info
      );
    },
  },
};

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: process.env.PRISMA_SECRET,
  debug: true,
});

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({ ...req, prisma }),
});
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`)
);
