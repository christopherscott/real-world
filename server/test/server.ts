// import { importSchema } from 'graphql-import';
// import {
//   makeExecutableSchema,
//   addMockFunctionsToSchema,
//   MockList,
// } from 'graphql-tools';
// import { graphql } from 'graphql';
// import resolvers from '../src/resolvers';

// const typeDefs = importSchema('./src/schema.graphql');

// const schema = makeExecutableSchema({ typeDefs, resolvers });

// const mocks = {
//   Film: () => ({
//     title: '2',
//   }),
// };

// addMockFunctionsToSchema({
//   schema,
//   mocks,
// });

// const query = `
//   query {
//     films {
//       id
//       title
//       rating
//     }
//   }
// `;

// graphql(schema, query).then(result => console.log('Got result', result));
