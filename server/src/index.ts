import { GraphQLServer } from 'graphql-yoga';
import * as express from 'express';
import { Prisma } from './generated/prisma';
import config from '../config';
import resolvers from './resolvers';

const server = new GraphQLServer({
  resolvers,
  typeDefs: './src/schema.graphql',
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: config.PRISMA_ENDPOINT,
      secret: config.PRISMA_SECRET,
      // debug: true,
    }),
  }),
});

server.express.use(express.static('static'));

server.start(() => console.log('Server is running on http://localhost:4000'));
