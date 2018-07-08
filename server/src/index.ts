import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import { PRISMA_ENDPOINT, PRISMA_SECRET } from './config';
import resolvers from './resolvers';

const server = new GraphQLServer({
  resolvers,
  typeDefs: './src/schema.graphql',
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: PRISMA_ENDPOINT,
      secret: PRISMA_SECRET,
    }),
  }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));
