import { GraphQLClient } from 'graphql-request';
import { Prisma } from '../generated/prisma';

export const db = new Prisma({
  endpoint: 'http://localhost:4466',
  secret: 'mysecret123',
});

export const client = new GraphQLClient(`http://localhost:4000`);
