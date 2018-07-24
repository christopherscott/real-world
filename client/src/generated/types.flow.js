

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Movies
// ====================================================

export type Movies_movies_ratings = {
  __typename: "Rating",
  source: RatingSource,
  value: ?string,
};

export type Movies_movies_genres = {
  __typename: "Genre",
  name: string,
};

export type Movies_movies = {
  __typename: "Movie",
  id: string,
  title: string,
  overview: string,
  popularity: number,
  releaseDate: any,
  poster: string,
  runtime: any,
  director: string,
  actors: string,
  ratings: ?Array<Movies_movies_ratings>,
  genres: ?Array<Movies_movies_genres>,
};

export type Movies = {
  movies: Array<Movies_movies>
};

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// 
export type RatingSource = "IMDb" | "MetaCritic" | "RottenTomatoes";

//==============================================================
// END Enums and Input Objects
//==============================================================