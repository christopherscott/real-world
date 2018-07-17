

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Films
// ====================================================

export type Films_films_directors = {|
  +__typename: "Person",
  +id: string,
  +firstName: string,
  +lastName: string,
|};

export type Films_films = {|
  +__typename: "Film",
  +id: string,
  +title: string,
  +year: any,
  +runtime: any,
  +plot: string,
  +poster: string,
  +rating: number,
  +votes: number,
  +directors: ?$ReadOnlyArray<Films_films_directors>,
|};

export type Films = {|
  +films: $ReadOnlyArray<Films_films>
|};

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================