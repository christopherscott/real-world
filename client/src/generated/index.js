

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Movie
// ====================================================

export type Movie_movie_genres = {|
  __typename: "Genre",
  id: string,
  name: string,
|};

export type Movie_movie_ratings = {|
  __typename: "Rating",
  source: RatingSource,
  value: ?string,
|};

export type Movie_movie = {|
  __typename: "Movie",
  title: string,
  overview: string,
  popularity: number,
  releaseDate: any,
  poster: string,
  runtime: any,
  director: string,
  actors: string,
  genres: ?Array<Movie_movie_genres>,
  ratings: ?Array<Movie_movie_ratings>,
|};

export type Movie = {|
  movie: ?Movie_movie
|};

export type MovieVariables = {|
  id?: ?string
|};


/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Movies
// ====================================================

export type Movies_movies_pageInfo = {|
  __typename: "PageInfo",
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean,
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: ?string,
|};

export type Movies_movies_edges_node = {|
  __typename: "Movie",
  id: string,
  title: string,
  poster: string,
|};

export type Movies_movies_edges = {|
  __typename: "MovieEdge",
  /**
   * The item at the end of the edge.
   */
  node: Movies_movies_edges_node,
|};

export type Movies_movies = {|
  __typename: "Movies",
  pageInfo: Movies_movies_pageInfo,
  edges: Array<Movies_movies_edges>,
|};

export type Movies = {|
  movies: Movies_movies
|};

export type MoviesVariables = {|
  after?: ?string
|};

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 
 */
export type RatingSource = "IMDb" | "MetaCritic" | "RottenTomatoes";

//==============================================================
// END Enums and Input Objects
//==============================================================