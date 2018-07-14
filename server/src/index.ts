import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import resolvers from './resolvers';

const server = new GraphQLServer({
  resolvers,
  typeDefs: './src/schema.graphql',
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_SECRET,
    }),
  }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));
