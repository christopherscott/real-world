/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';

type Resolver<Result, Args = any> = (
  parent: any,
  args: Args,
  context: any,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type DateTime = any;
/** An object with an ID */
export interface Node {
  id: string /** The id of the object. */;
}

export interface Query {
  films: Film[];
  film: Film;
  search: Search[];
}

export interface Film extends Node {
  id: string;
  title: string;
  year: DateTime;
  runtime: DateTime;
  plot: string;
  poster: string;
  rating: number;
  votes: number;
  genres?: Genre[] | null;
  directors?: Person[] | null;
  writers?: Person[] | null;
  actors?: Person[] | null;
  comments?: Comment[] | null;
}

export interface Genre extends Node {
  id: string;
  genre: string;
}

export interface Person extends Node {
  id: string;
  firstName: string;
  lastName: string;
  directedFilms?: Film[] | null;
  writtenFilms?: Film[] | null;
  playedFilms?: Film[] | null;
  comments?: Comment[] | null;
}

export interface Comment extends Node {
  id: string;
  user: User;
  film: Film;
  text: string;
}

export interface User extends Node {
  id: string;
  name: string;
}

export interface Mutation {
  addComment: Comment;
}

export namespace QueryResolvers {
  export interface Resolvers {
    films?: FilmsResolver;
    film?: FilmResolver;
    search?: SearchResolver;
  }

  export type FilmsResolver = Resolver<Film[]>;
  export type FilmResolver = Resolver<Film, FilmArgs>;
  export interface FilmArgs {
    id: string;
  }

  export type SearchResolver = Resolver<Search[], SearchArgs>;
  export interface SearchArgs {
    search: string;
  }
}

export namespace FilmResolvers {
  export interface Resolvers {
    id?: IdResolver;
    title?: TitleResolver;
    year?: YearResolver;
    runtime?: RuntimeResolver;
    plot?: PlotResolver;
    poster?: PosterResolver;
    rating?: RatingResolver;
    votes?: VotesResolver;
    genres?: GenresResolver;
    directors?: DirectorsResolver;
    writers?: WritersResolver;
    actors?: ActorsResolver;
    comments?: CommentsResolver;
  }

  export type IdResolver = Resolver<string>;
  export type TitleResolver = Resolver<string>;
  export type YearResolver = Resolver<DateTime>;
  export type RuntimeResolver = Resolver<DateTime>;
  export type PlotResolver = Resolver<string>;
  export type PosterResolver = Resolver<string>;
  export type RatingResolver = Resolver<number>;
  export type VotesResolver = Resolver<number>;
  export type GenresResolver = Resolver<Genre[] | null, GenresArgs>;
  export interface GenresArgs {
    where?: GenreWhereInput | null;
    orderBy?: GenreOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type DirectorsResolver = Resolver<Person[] | null, DirectorsArgs>;
  export interface DirectorsArgs {
    where?: PersonWhereInput | null;
    orderBy?: PersonOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type WritersResolver = Resolver<Person[] | null, WritersArgs>;
  export interface WritersArgs {
    where?: PersonWhereInput | null;
    orderBy?: PersonOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type ActorsResolver = Resolver<Person[] | null, ActorsArgs>;
  export interface ActorsArgs {
    where?: PersonWhereInput | null;
    orderBy?: PersonOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type CommentsResolver = Resolver<Comment[] | null, CommentsArgs>;
  export interface CommentsArgs {
    where?: CommentWhereInput | null;
    orderBy?: CommentOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }
}

export namespace GenreResolvers {
  export interface Resolvers {
    id?: IdResolver;
    genre?: GenreResolver;
  }

  export type IdResolver = Resolver<string>;
  export type GenreResolver = Resolver<string>;
}

export namespace PersonResolvers {
  export interface Resolvers {
    id?: IdResolver;
    firstName?: FirstNameResolver;
    lastName?: LastNameResolver;
    directedFilms?: DirectedFilmsResolver;
    writtenFilms?: WrittenFilmsResolver;
    playedFilms?: PlayedFilmsResolver;
    comments?: CommentsResolver;
  }

  export type IdResolver = Resolver<string>;
  export type FirstNameResolver = Resolver<string>;
  export type LastNameResolver = Resolver<string>;
  export type DirectedFilmsResolver = Resolver<
    Film[] | null,
    DirectedFilmsArgs
  >;
  export interface DirectedFilmsArgs {
    where?: FilmWhereInput | null;
    orderBy?: FilmOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type WrittenFilmsResolver = Resolver<Film[] | null, WrittenFilmsArgs>;
  export interface WrittenFilmsArgs {
    where?: FilmWhereInput | null;
    orderBy?: FilmOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type PlayedFilmsResolver = Resolver<Film[] | null, PlayedFilmsArgs>;
  export interface PlayedFilmsArgs {
    where?: FilmWhereInput | null;
    orderBy?: FilmOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type CommentsResolver = Resolver<Comment[] | null, CommentsArgs>;
  export interface CommentsArgs {
    where?: CommentWhereInput | null;
    orderBy?: CommentOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }
}

export namespace CommentResolvers {
  export interface Resolvers {
    id?: IdResolver;
    user?: UserResolver;
    film?: FilmResolver;
    text?: TextResolver;
  }

  export type IdResolver = Resolver<string>;
  export type UserResolver = Resolver<User, UserArgs>;
  export interface UserArgs {
    where?: UserWhereInput | null;
  }

  export type FilmResolver = Resolver<Film, FilmArgs>;
  export interface FilmArgs {
    where?: FilmWhereInput | null;
  }

  export type TextResolver = Resolver<string>;
}

export namespace UserResolvers {
  export interface Resolvers {
    id?: IdResolver;
    name?: NameResolver;
  }

  export type IdResolver = Resolver<string>;
  export type NameResolver = Resolver<string>;
}

export namespace MutationResolvers {
  export interface Resolvers {
    addComment?: AddCommentResolver;
  }

  export type AddCommentResolver = Resolver<Comment, AddCommentArgs>;
  export interface AddCommentArgs {
    input: AddCommentInput;
  }
}

export interface GenreWhereInput {
  AND?: GenreWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: GenreWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | GenreWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  genre?: string | null;
  genre_not?:
    | string
    | null /** All values that are not equal to given value. */;
  genre_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  genre_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  genre_lt?: string | null /** All values less than the given value. */;
  genre_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  genre_gt?: string | null /** All values greater than the given value. */;
  genre_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  genre_contains?: string | null /** All values containing the given string. */;
  genre_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  genre_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  genre_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  genre_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  genre_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  _MagicalBackRelation_FilmToGenre_every?: FilmWhereInput | null;
  _MagicalBackRelation_FilmToGenre_some?: FilmWhereInput | null;
  _MagicalBackRelation_FilmToGenre_none?: FilmWhereInput | null;
}

export interface FilmWhereInput {
  AND?: FilmWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: FilmWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | FilmWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  title?: string | null;
  title_not?:
    | string
    | null /** All values that are not equal to given value. */;
  title_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  title_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  title_lt?: string | null /** All values less than the given value. */;
  title_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  title_gt?: string | null /** All values greater than the given value. */;
  title_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  title_contains?: string | null /** All values containing the given string. */;
  title_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  title_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  title_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  title_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  title_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  year?: DateTime | null;
  year_not?: DateTime | null /** All values that are not equal to given value. */;
  year_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  year_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  year_lt?: DateTime | null /** All values less than the given value. */;
  year_lte?: DateTime | null /** All values less than or equal the given value. */;
  year_gt?: DateTime | null /** All values greater than the given value. */;
  year_gte?: DateTime | null /** All values greater than or equal the given value. */;
  runtime?: DateTime | null;
  runtime_not?: DateTime | null /** All values that are not equal to given value. */;
  runtime_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */;
  runtime_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */;
  runtime_lt?: DateTime | null /** All values less than the given value. */;
  runtime_lte?: DateTime | null /** All values less than or equal the given value. */;
  runtime_gt?: DateTime | null /** All values greater than the given value. */;
  runtime_gte?: DateTime | null /** All values greater than or equal the given value. */;
  plot?: string | null;
  plot_not?: string | null /** All values that are not equal to given value. */;
  plot_in?: string[] | null /** All values that are contained in given list. */;
  plot_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  plot_lt?: string | null /** All values less than the given value. */;
  plot_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  plot_gt?: string | null /** All values greater than the given value. */;
  plot_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  plot_contains?: string | null /** All values containing the given string. */;
  plot_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  plot_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  plot_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  plot_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  plot_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  poster?: string | null;
  poster_not?:
    | string
    | null /** All values that are not equal to given value. */;
  poster_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  poster_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  poster_lt?: string | null /** All values less than the given value. */;
  poster_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  poster_gt?: string | null /** All values greater than the given value. */;
  poster_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  poster_contains?:
    | string
    | null /** All values containing the given string. */;
  poster_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  poster_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  poster_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  poster_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  poster_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  rating?: number | null;
  rating_not?:
    | number
    | null /** All values that are not equal to given value. */;
  rating_in?:
    | number[]
    | null /** All values that are contained in given list. */;
  rating_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */;
  rating_lt?: number | null /** All values less than the given value. */;
  rating_lte?:
    | number
    | null /** All values less than or equal the given value. */;
  rating_gt?: number | null /** All values greater than the given value. */;
  rating_gte?:
    | number
    | null /** All values greater than or equal the given value. */;
  votes?: number | null;
  votes_not?:
    | number
    | null /** All values that are not equal to given value. */;
  votes_in?:
    | number[]
    | null /** All values that are contained in given list. */;
  votes_not_in?:
    | number[]
    | null /** All values that are not contained in given list. */;
  votes_lt?: number | null /** All values less than the given value. */;
  votes_lte?:
    | number
    | null /** All values less than or equal the given value. */;
  votes_gt?: number | null /** All values greater than the given value. */;
  votes_gte?:
    | number
    | null /** All values greater than or equal the given value. */;
  genres_every?: GenreWhereInput | null;
  genres_some?: GenreWhereInput | null;
  genres_none?: GenreWhereInput | null;
  directors_every?: PersonWhereInput | null;
  directors_some?: PersonWhereInput | null;
  directors_none?: PersonWhereInput | null;
  writers_every?: PersonWhereInput | null;
  writers_some?: PersonWhereInput | null;
  writers_none?: PersonWhereInput | null;
  actors_every?: PersonWhereInput | null;
  actors_some?: PersonWhereInput | null;
  actors_none?: PersonWhereInput | null;
  comments_every?: CommentWhereInput | null;
  comments_some?: CommentWhereInput | null;
  comments_none?: CommentWhereInput | null;
}

export interface PersonWhereInput {
  AND?: PersonWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: PersonWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | PersonWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  firstName?: string | null;
  firstName_not?:
    | string
    | null /** All values that are not equal to given value. */;
  firstName_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  firstName_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  firstName_lt?: string | null /** All values less than the given value. */;
  firstName_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  firstName_gt?: string | null /** All values greater than the given value. */;
  firstName_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  firstName_contains?:
    | string
    | null /** All values containing the given string. */;
  firstName_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  firstName_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  firstName_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  firstName_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  firstName_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  lastName?: string | null;
  lastName_not?:
    | string
    | null /** All values that are not equal to given value. */;
  lastName_in?:
    | string[]
    | null /** All values that are contained in given list. */;
  lastName_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  lastName_lt?: string | null /** All values less than the given value. */;
  lastName_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  lastName_gt?: string | null /** All values greater than the given value. */;
  lastName_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  lastName_contains?:
    | string
    | null /** All values containing the given string. */;
  lastName_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  lastName_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  lastName_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  lastName_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  lastName_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  directedFilms_every?: FilmWhereInput | null;
  directedFilms_some?: FilmWhereInput | null;
  directedFilms_none?: FilmWhereInput | null;
  writtenFilms_every?: FilmWhereInput | null;
  writtenFilms_some?: FilmWhereInput | null;
  writtenFilms_none?: FilmWhereInput | null;
  playedFilms_every?: FilmWhereInput | null;
  playedFilms_some?: FilmWhereInput | null;
  playedFilms_none?: FilmWhereInput | null;
  comments_every?: CommentWhereInput | null;
  comments_some?: CommentWhereInput | null;
  comments_none?: CommentWhereInput | null;
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: CommentWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | CommentWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  text?: string | null;
  text_not?: string | null /** All values that are not equal to given value. */;
  text_in?: string[] | null /** All values that are contained in given list. */;
  text_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  text_lt?: string | null /** All values less than the given value. */;
  text_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  text_gt?: string | null /** All values greater than the given value. */;
  text_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  text_contains?: string | null /** All values containing the given string. */;
  text_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  text_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  text_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  text_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  text_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  user?: UserWhereInput | null;
  film?: FilmWhereInput | null;
  _MagicalBackRelation_CommentToPerson_every?: PersonWhereInput | null;
  _MagicalBackRelation_CommentToPerson_some?: PersonWhereInput | null;
  _MagicalBackRelation_CommentToPerson_none?: PersonWhereInput | null;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null /** Logical AND on all given filters. */;
  OR?: UserWhereInput[] | null /** Logical OR on all given filters. */;
  NOT?:
    | UserWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */;
  id?: string | null;
  id_not?: string | null /** All values that are not equal to given value. */;
  id_in?: string[] | null /** All values that are contained in given list. */;
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  id_lt?: string | null /** All values less than the given value. */;
  id_lte?: string | null /** All values less than or equal the given value. */;
  id_gt?: string | null /** All values greater than the given value. */;
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  id_contains?: string | null /** All values containing the given string. */;
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  id_ends_with?: string | null /** All values ending with the given string. */;
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  name?: string | null;
  name_not?: string | null /** All values that are not equal to given value. */;
  name_in?: string[] | null /** All values that are contained in given list. */;
  name_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */;
  name_lt?: string | null /** All values less than the given value. */;
  name_lte?:
    | string
    | null /** All values less than or equal the given value. */;
  name_gt?: string | null /** All values greater than the given value. */;
  name_gte?:
    | string
    | null /** All values greater than or equal the given value. */;
  name_contains?: string | null /** All values containing the given string. */;
  name_not_contains?:
    | string
    | null /** All values not containing the given string. */;
  name_starts_with?:
    | string
    | null /** All values starting with the given string. */;
  name_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */;
  name_ends_with?:
    | string
    | null /** All values ending with the given string. */;
  name_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */;
  _MagicalBackRelation_CommentToUser_every?: CommentWhereInput | null;
  _MagicalBackRelation_CommentToUser_some?: CommentWhereInput | null;
  _MagicalBackRelation_CommentToUser_none?: CommentWhereInput | null;
}

export interface AddCommentInput {
  userId: string;
  filmId: string;
  text?: string | null;
}
export interface FilmQueryArgs {
  id: string;
}
export interface SearchQueryArgs {
  search: string;
}
export interface GenresFilmArgs {
  where?: GenreWhereInput | null;
  orderBy?: GenreOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface DirectorsFilmArgs {
  where?: PersonWhereInput | null;
  orderBy?: PersonOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface WritersFilmArgs {
  where?: PersonWhereInput | null;
  orderBy?: PersonOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface ActorsFilmArgs {
  where?: PersonWhereInput | null;
  orderBy?: PersonOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface CommentsFilmArgs {
  where?: CommentWhereInput | null;
  orderBy?: CommentOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface DirectedFilmsPersonArgs {
  where?: FilmWhereInput | null;
  orderBy?: FilmOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface WrittenFilmsPersonArgs {
  where?: FilmWhereInput | null;
  orderBy?: FilmOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface PlayedFilmsPersonArgs {
  where?: FilmWhereInput | null;
  orderBy?: FilmOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface CommentsPersonArgs {
  where?: CommentWhereInput | null;
  orderBy?: CommentOrderByInput | null;
  skip?: number | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
export interface UserCommentArgs {
  where?: UserWhereInput | null;
}
export interface FilmCommentArgs {
  where?: FilmWhereInput | null;
}
export interface AddCommentMutationArgs {
  input: AddCommentInput;
}

export enum GenreOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  genre_ASC = 'genre_ASC',
  genre_DESC = 'genre_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
}

export enum PersonOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  firstName_ASC = 'firstName_ASC',
  firstName_DESC = 'firstName_DESC',
  lastName_ASC = 'lastName_ASC',
  lastName_DESC = 'lastName_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
}

export enum FilmOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  year_ASC = 'year_ASC',
  year_DESC = 'year_DESC',
  runtime_ASC = 'runtime_ASC',
  runtime_DESC = 'runtime_DESC',
  plot_ASC = 'plot_ASC',
  plot_DESC = 'plot_DESC',
  poster_ASC = 'poster_ASC',
  poster_DESC = 'poster_DESC',
  rating_ASC = 'rating_ASC',
  rating_DESC = 'rating_DESC',
  votes_ASC = 'votes_ASC',
  votes_DESC = 'votes_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
}

export enum CommentOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
}

export type Search = Film | Comment;
