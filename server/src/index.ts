import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import resolvers from './resolvers';

const server = new GraphQLServer({
  resolvers,
  typeDefs: './src/schema.graphql',
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'http://localhost:4466',
      debug: true,
      secret: 'mysecret123',
    }),
  }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));
