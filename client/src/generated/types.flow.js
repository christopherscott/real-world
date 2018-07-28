/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Movies
// ====================================================

export type Movies_movies_pageInfo = {
  __typename: 'PageInfo',
  hasNextPage: boolean, // When paginating forwards, are there more items?
  endCursor: ?string, // When paginating forwards, the cursor to continue.
};

export type Movies_movies_edges_node = {
  __typename: 'Movie',
  id: string,
  title: string,
  poster: string,
};

export type Movies_movies_edges = {
  __typename: 'MovieEdge',
  node: Movies_movies_edges_node, // The item at the end of the edge.
};

export type Movies_movies = {
  __typename: 'MovieConnection',
  pageInfo: Movies_movies_pageInfo, // Information to aid in pagination.
  edges: Array<Movies_movies_edges>, // A list of edges.
};

export type Movies = {
  movies: Movies_movies,
};

export type MoviesVariables = {
  after?: ?string,
};

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
