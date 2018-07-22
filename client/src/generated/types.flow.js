

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Films
// ====================================================

export type Films_films_genres = {
  __typename: "Genre",
  genre: string,
};

export type Films_films = {
  __typename: "Film",
  id: string,
  title: string,
  poster: string,
  rating: number,
  votes: number,
  genres: ?Array<Films_films_genres>,
};

export type Films = {
  films: Array<Films_films>
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