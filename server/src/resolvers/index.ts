import { cond, prop, always } from 'ramda';
import Query from './Query';
import Mutation from './Mutation';

export default {
  Query,
  Mutation,
  Search: {
    __resolveType: cond([
      [prop('title'), always('Film')],
      [prop('text'), always('Comment')],
    ]),
  },
};
