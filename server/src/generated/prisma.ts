import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    movies: <T = Movie[]>(args: { where?: MovieWhereInput, orderBy?: MovieOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ratings: <T = Rating[]>(args: { where?: RatingWhereInput, orderBy?: RatingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    genres: <T = Genre[]>(args: { where?: GenreWhereInput, orderBy?: GenreOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    movie: <T = Movie | null>(args: { where: MovieWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rating: <T = Rating | null>(args: { where: RatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    genre: <T = Genre | null>(args: { where: GenreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    moviesConnection: <T = MovieConnection>(args: { where?: MovieWhereInput, orderBy?: MovieOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ratingsConnection: <T = RatingConnection>(args: { where?: RatingWhereInput, orderBy?: RatingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    genresConnection: <T = GenreConnection>(args: { where?: GenreWhereInput, orderBy?: GenreOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createMovie: <T = Movie>(args: { data: MovieCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRating: <T = Rating>(args: { data: RatingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGenre: <T = Genre>(args: { data: GenreCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMovie: <T = Movie | null>(args: { data: MovieUpdateInput, where: MovieWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRating: <T = Rating | null>(args: { data: RatingUpdateInput, where: RatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGenre: <T = Genre | null>(args: { data: GenreUpdateInput, where: GenreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMovie: <T = Movie | null>(args: { where: MovieWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRating: <T = Rating | null>(args: { where: RatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGenre: <T = Genre | null>(args: { where: GenreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMovie: <T = Movie>(args: { where: MovieWhereUniqueInput, create: MovieCreateInput, update: MovieUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRating: <T = Rating>(args: { where: RatingWhereUniqueInput, create: RatingCreateInput, update: RatingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGenre: <T = Genre>(args: { where: GenreWhereUniqueInput, create: GenreCreateInput, update: GenreUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMovies: <T = BatchPayload>(args: { data: MovieUpdateInput, where?: MovieWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRatings: <T = BatchPayload>(args: { data: RatingUpdateInput, where?: RatingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGenres: <T = BatchPayload>(args: { data: GenreUpdateInput, where?: GenreWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMovies: <T = BatchPayload>(args: { where?: MovieWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRatings: <T = BatchPayload>(args: { where?: RatingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGenres: <T = BatchPayload>(args: { where?: GenreWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    movie: <T = MovieSubscriptionPayload | null>(args: { where?: MovieSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    rating: <T = RatingSubscriptionPayload | null>(args: { where?: RatingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    genre: <T = GenreSubscriptionPayload | null>(args: { where?: GenreSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Movie: (where?: MovieWhereInput) => Promise<boolean>
  Rating: (where?: RatingWhereInput) => Promise<boolean>
  Genre: (where?: GenreWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateGenre {
  count: Int!
}

type AggregateMovie {
  count: Int!
}

type AggregateRating {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Genre implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type GenreConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GenreEdge]!
  aggregate: AggregateGenre!
}

input GenreCreateInput {
  name: String!
}

input GenreCreateManyInput {
  create: [GenreCreateInput!]
  connect: [GenreWhereUniqueInput!]
}

"""An edge in a connection."""
type GenreEdge {
  """The item at the end of the edge."""
  node: Genre!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GenreOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type GenrePreviousValues {
  id: ID!
  name: String!
}

type GenreSubscriptionPayload {
  mutation: MutationType!
  node: Genre
  updatedFields: [String!]
  previousValues: GenrePreviousValues
}

input GenreSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GenreSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GenreSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GenreSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GenreWhereInput
}

input GenreUpdateDataInput {
  name: String
}

input GenreUpdateInput {
  name: String
}

input GenreUpdateManyInput {
  create: [GenreCreateInput!]
  connect: [GenreWhereUniqueInput!]
  disconnect: [GenreWhereUniqueInput!]
  delete: [GenreWhereUniqueInput!]
  update: [GenreUpdateWithWhereUniqueNestedInput!]
  upsert: [GenreUpsertWithWhereUniqueNestedInput!]
}

input GenreUpdateWithWhereUniqueNestedInput {
  where: GenreWhereUniqueInput!
  data: GenreUpdateDataInput!
}

input GenreUpsertWithWhereUniqueNestedInput {
  where: GenreWhereUniqueInput!
  update: GenreUpdateDataInput!
  create: GenreCreateInput!
}

input GenreWhereInput {
  """Logical AND on all given filters."""
  AND: [GenreWhereInput!]

  """Logical OR on all given filters."""
  OR: [GenreWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GenreWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input GenreWhereUniqueInput {
  id: ID
  name: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Movie implements Node {
  id: ID!
  title: String!
  overview: String!
  popularity: Float!
  releaseDate: DateTime!
  poster: String!
  genres(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Genre!]
  runtime: DateTime!
  director: String!
  actors: String!
  ratings(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating!]
}

"""A connection to a list of items."""
type MovieConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MovieEdge]!
  aggregate: AggregateMovie!
}

input MovieCreateInput {
  title: String!
  overview: String!
  popularity: Float!
  releaseDate: DateTime!
  poster: String!
  runtime: DateTime!
  director: String!
  actors: String!
  genres: GenreCreateManyInput
  ratings: RatingCreateManyWithoutRatedMovieInput
}

input MovieCreateOneWithoutRatingsInput {
  create: MovieCreateWithoutRatingsInput
  connect: MovieWhereUniqueInput
}

input MovieCreateWithoutRatingsInput {
  title: String!
  overview: String!
  popularity: Float!
  releaseDate: DateTime!
  poster: String!
  runtime: DateTime!
  director: String!
  actors: String!
  genres: GenreCreateManyInput
}

"""An edge in a connection."""
type MovieEdge {
  """The item at the end of the edge."""
  node: Movie!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MovieOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  overview_ASC
  overview_DESC
  popularity_ASC
  popularity_DESC
  releaseDate_ASC
  releaseDate_DESC
  poster_ASC
  poster_DESC
  runtime_ASC
  runtime_DESC
  director_ASC
  director_DESC
  actors_ASC
  actors_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MoviePreviousValues {
  id: ID!
  title: String!
  overview: String!
  popularity: Float!
  releaseDate: DateTime!
  poster: String!
  runtime: DateTime!
  director: String!
  actors: String!
}

type MovieSubscriptionPayload {
  mutation: MutationType!
  node: Movie
  updatedFields: [String!]
  previousValues: MoviePreviousValues
}

input MovieSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MovieSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MovieSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MovieSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MovieWhereInput
}

input MovieUpdateInput {
  title: String
  overview: String
  popularity: Float
  releaseDate: DateTime
  poster: String
  runtime: DateTime
  director: String
  actors: String
  genres: GenreUpdateManyInput
  ratings: RatingUpdateManyWithoutRatedMovieInput
}

input MovieUpdateOneWithoutRatingsInput {
  create: MovieCreateWithoutRatingsInput
  connect: MovieWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: MovieUpdateWithoutRatingsDataInput
  upsert: MovieUpsertWithoutRatingsInput
}

input MovieUpdateWithoutRatingsDataInput {
  title: String
  overview: String
  popularity: Float
  releaseDate: DateTime
  poster: String
  runtime: DateTime
  director: String
  actors: String
  genres: GenreUpdateManyInput
}

input MovieUpsertWithoutRatingsInput {
  update: MovieUpdateWithoutRatingsDataInput!
  create: MovieCreateWithoutRatingsInput!
}

input MovieWhereInput {
  """Logical AND on all given filters."""
  AND: [MovieWhereInput!]

  """Logical OR on all given filters."""
  OR: [MovieWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MovieWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  overview: String

  """All values that are not equal to given value."""
  overview_not: String

  """All values that are contained in given list."""
  overview_in: [String!]

  """All values that are not contained in given list."""
  overview_not_in: [String!]

  """All values less than the given value."""
  overview_lt: String

  """All values less than or equal the given value."""
  overview_lte: String

  """All values greater than the given value."""
  overview_gt: String

  """All values greater than or equal the given value."""
  overview_gte: String

  """All values containing the given string."""
  overview_contains: String

  """All values not containing the given string."""
  overview_not_contains: String

  """All values starting with the given string."""
  overview_starts_with: String

  """All values not starting with the given string."""
  overview_not_starts_with: String

  """All values ending with the given string."""
  overview_ends_with: String

  """All values not ending with the given string."""
  overview_not_ends_with: String
  popularity: Float

  """All values that are not equal to given value."""
  popularity_not: Float

  """All values that are contained in given list."""
  popularity_in: [Float!]

  """All values that are not contained in given list."""
  popularity_not_in: [Float!]

  """All values less than the given value."""
  popularity_lt: Float

  """All values less than or equal the given value."""
  popularity_lte: Float

  """All values greater than the given value."""
  popularity_gt: Float

  """All values greater than or equal the given value."""
  popularity_gte: Float
  releaseDate: DateTime

  """All values that are not equal to given value."""
  releaseDate_not: DateTime

  """All values that are contained in given list."""
  releaseDate_in: [DateTime!]

  """All values that are not contained in given list."""
  releaseDate_not_in: [DateTime!]

  """All values less than the given value."""
  releaseDate_lt: DateTime

  """All values less than or equal the given value."""
  releaseDate_lte: DateTime

  """All values greater than the given value."""
  releaseDate_gt: DateTime

  """All values greater than or equal the given value."""
  releaseDate_gte: DateTime
  poster: String

  """All values that are not equal to given value."""
  poster_not: String

  """All values that are contained in given list."""
  poster_in: [String!]

  """All values that are not contained in given list."""
  poster_not_in: [String!]

  """All values less than the given value."""
  poster_lt: String

  """All values less than or equal the given value."""
  poster_lte: String

  """All values greater than the given value."""
  poster_gt: String

  """All values greater than or equal the given value."""
  poster_gte: String

  """All values containing the given string."""
  poster_contains: String

  """All values not containing the given string."""
  poster_not_contains: String

  """All values starting with the given string."""
  poster_starts_with: String

  """All values not starting with the given string."""
  poster_not_starts_with: String

  """All values ending with the given string."""
  poster_ends_with: String

  """All values not ending with the given string."""
  poster_not_ends_with: String
  runtime: DateTime

  """All values that are not equal to given value."""
  runtime_not: DateTime

  """All values that are contained in given list."""
  runtime_in: [DateTime!]

  """All values that are not contained in given list."""
  runtime_not_in: [DateTime!]

  """All values less than the given value."""
  runtime_lt: DateTime

  """All values less than or equal the given value."""
  runtime_lte: DateTime

  """All values greater than the given value."""
  runtime_gt: DateTime

  """All values greater than or equal the given value."""
  runtime_gte: DateTime
  director: String

  """All values that are not equal to given value."""
  director_not: String

  """All values that are contained in given list."""
  director_in: [String!]

  """All values that are not contained in given list."""
  director_not_in: [String!]

  """All values less than the given value."""
  director_lt: String

  """All values less than or equal the given value."""
  director_lte: String

  """All values greater than the given value."""
  director_gt: String

  """All values greater than or equal the given value."""
  director_gte: String

  """All values containing the given string."""
  director_contains: String

  """All values not containing the given string."""
  director_not_contains: String

  """All values starting with the given string."""
  director_starts_with: String

  """All values not starting with the given string."""
  director_not_starts_with: String

  """All values ending with the given string."""
  director_ends_with: String

  """All values not ending with the given string."""
  director_not_ends_with: String
  actors: String

  """All values that are not equal to given value."""
  actors_not: String

  """All values that are contained in given list."""
  actors_in: [String!]

  """All values that are not contained in given list."""
  actors_not_in: [String!]

  """All values less than the given value."""
  actors_lt: String

  """All values less than or equal the given value."""
  actors_lte: String

  """All values greater than the given value."""
  actors_gt: String

  """All values greater than or equal the given value."""
  actors_gte: String

  """All values containing the given string."""
  actors_contains: String

  """All values not containing the given string."""
  actors_not_contains: String

  """All values starting with the given string."""
  actors_starts_with: String

  """All values not starting with the given string."""
  actors_not_starts_with: String

  """All values ending with the given string."""
  actors_ends_with: String

  """All values not ending with the given string."""
  actors_not_ends_with: String
  genres_every: GenreWhereInput
  genres_some: GenreWhereInput
  genres_none: GenreWhereInput
  ratings_every: RatingWhereInput
  ratings_some: RatingWhereInput
  ratings_none: RatingWhereInput
}

input MovieWhereUniqueInput {
  id: ID
}

type Mutation {
  createMovie(data: MovieCreateInput!): Movie!
  createRating(data: RatingCreateInput!): Rating!
  createGenre(data: GenreCreateInput!): Genre!
  updateMovie(data: MovieUpdateInput!, where: MovieWhereUniqueInput!): Movie
  updateRating(data: RatingUpdateInput!, where: RatingWhereUniqueInput!): Rating
  updateGenre(data: GenreUpdateInput!, where: GenreWhereUniqueInput!): Genre
  deleteMovie(where: MovieWhereUniqueInput!): Movie
  deleteRating(where: RatingWhereUniqueInput!): Rating
  deleteGenre(where: GenreWhereUniqueInput!): Genre
  upsertMovie(where: MovieWhereUniqueInput!, create: MovieCreateInput!, update: MovieUpdateInput!): Movie!
  upsertRating(where: RatingWhereUniqueInput!, create: RatingCreateInput!, update: RatingUpdateInput!): Rating!
  upsertGenre(where: GenreWhereUniqueInput!, create: GenreCreateInput!, update: GenreUpdateInput!): Genre!
  updateManyMovies(data: MovieUpdateInput!, where: MovieWhereInput): BatchPayload!
  updateManyRatings(data: RatingUpdateInput!, where: RatingWhereInput): BatchPayload!
  updateManyGenres(data: GenreUpdateInput!, where: GenreWhereInput): BatchPayload!
  deleteManyMovies(where: MovieWhereInput): BatchPayload!
  deleteManyRatings(where: RatingWhereInput): BatchPayload!
  deleteManyGenres(where: GenreWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie]!
  ratings(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating]!
  genres(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Genre]!
  movie(where: MovieWhereUniqueInput!): Movie
  rating(where: RatingWhereUniqueInput!): Rating
  genre(where: GenreWhereUniqueInput!): Genre
  moviesConnection(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieConnection!
  ratingsConnection(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RatingConnection!
  genresConnection(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GenreConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Rating implements Node {
  id: ID!
  source: RatingSource!
  value: String
  ratedMovie(where: MovieWhereInput): Movie
}

"""A connection to a list of items."""
type RatingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RatingEdge]!
  aggregate: AggregateRating!
}

input RatingCreateInput {
  source: RatingSource!
  value: String
  ratedMovie: MovieCreateOneWithoutRatingsInput
}

input RatingCreateManyWithoutRatedMovieInput {
  create: [RatingCreateWithoutRatedMovieInput!]
  connect: [RatingWhereUniqueInput!]
}

input RatingCreateWithoutRatedMovieInput {
  source: RatingSource!
  value: String
}

"""An edge in a connection."""
type RatingEdge {
  """The item at the end of the edge."""
  node: Rating!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RatingOrderByInput {
  id_ASC
  id_DESC
  source_ASC
  source_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RatingPreviousValues {
  id: ID!
  source: RatingSource!
  value: String
}

enum RatingSource {
  IMDb
  RottenTomatoes
  MetaCritic
}

type RatingSubscriptionPayload {
  mutation: MutationType!
  node: Rating
  updatedFields: [String!]
  previousValues: RatingPreviousValues
}

input RatingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RatingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RatingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RatingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RatingWhereInput
}

input RatingUpdateInput {
  source: RatingSource
  value: String
  ratedMovie: MovieUpdateOneWithoutRatingsInput
}

input RatingUpdateManyWithoutRatedMovieInput {
  create: [RatingCreateWithoutRatedMovieInput!]
  connect: [RatingWhereUniqueInput!]
  disconnect: [RatingWhereUniqueInput!]
  delete: [RatingWhereUniqueInput!]
  update: [RatingUpdateWithWhereUniqueWithoutRatedMovieInput!]
  upsert: [RatingUpsertWithWhereUniqueWithoutRatedMovieInput!]
}

input RatingUpdateWithoutRatedMovieDataInput {
  source: RatingSource
  value: String
}

input RatingUpdateWithWhereUniqueWithoutRatedMovieInput {
  where: RatingWhereUniqueInput!
  data: RatingUpdateWithoutRatedMovieDataInput!
}

input RatingUpsertWithWhereUniqueWithoutRatedMovieInput {
  where: RatingWhereUniqueInput!
  update: RatingUpdateWithoutRatedMovieDataInput!
  create: RatingCreateWithoutRatedMovieInput!
}

input RatingWhereInput {
  """Logical AND on all given filters."""
  AND: [RatingWhereInput!]

  """Logical OR on all given filters."""
  OR: [RatingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RatingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  source: RatingSource

  """All values that are not equal to given value."""
  source_not: RatingSource

  """All values that are contained in given list."""
  source_in: [RatingSource!]

  """All values that are not contained in given list."""
  source_not_in: [RatingSource!]
  value: String

  """All values that are not equal to given value."""
  value_not: String

  """All values that are contained in given list."""
  value_in: [String!]

  """All values that are not contained in given list."""
  value_not_in: [String!]

  """All values less than the given value."""
  value_lt: String

  """All values less than or equal the given value."""
  value_lte: String

  """All values greater than the given value."""
  value_gt: String

  """All values greater than or equal the given value."""
  value_gte: String

  """All values containing the given string."""
  value_contains: String

  """All values not containing the given string."""
  value_not_contains: String

  """All values starting with the given string."""
  value_starts_with: String

  """All values not starting with the given string."""
  value_not_starts_with: String

  """All values ending with the given string."""
  value_ends_with: String

  """All values not ending with the given string."""
  value_not_ends_with: String
  ratedMovie: MovieWhereInput
}

input RatingWhereUniqueInput {
  id: ID
}

type Subscription {
  movie(where: MovieSubscriptionWhereInput): MovieSubscriptionPayload
  rating(where: RatingSubscriptionWhereInput): RatingSubscriptionPayload
  genre(where: GenreSubscriptionWhereInput): GenreSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type RatingSource =   'IMDb' |
  'RottenTomatoes' |
  'MetaCritic'

export type MovieOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'overview_ASC' |
  'overview_DESC' |
  'popularity_ASC' |
  'popularity_DESC' |
  'releaseDate_ASC' |
  'releaseDate_DESC' |
  'poster_ASC' |
  'poster_DESC' |
  'runtime_ASC' |
  'runtime_DESC' |
  'director_ASC' |
  'director_DESC' |
  'actors_ASC' |
  'actors_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type GenreOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type RatingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'source_ASC' |
  'source_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface GenreCreateInput {
  name: String
}

export interface MovieWhereInput {
  AND?: MovieWhereInput[] | MovieWhereInput
  OR?: MovieWhereInput[] | MovieWhereInput
  NOT?: MovieWhereInput[] | MovieWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  overview?: String
  overview_not?: String
  overview_in?: String[] | String
  overview_not_in?: String[] | String
  overview_lt?: String
  overview_lte?: String
  overview_gt?: String
  overview_gte?: String
  overview_contains?: String
  overview_not_contains?: String
  overview_starts_with?: String
  overview_not_starts_with?: String
  overview_ends_with?: String
  overview_not_ends_with?: String
  popularity?: Float
  popularity_not?: Float
  popularity_in?: Float[] | Float
  popularity_not_in?: Float[] | Float
  popularity_lt?: Float
  popularity_lte?: Float
  popularity_gt?: Float
  popularity_gte?: Float
  releaseDate?: DateTime
  releaseDate_not?: DateTime
  releaseDate_in?: DateTime[] | DateTime
  releaseDate_not_in?: DateTime[] | DateTime
  releaseDate_lt?: DateTime
  releaseDate_lte?: DateTime
  releaseDate_gt?: DateTime
  releaseDate_gte?: DateTime
  poster?: String
  poster_not?: String
  poster_in?: String[] | String
  poster_not_in?: String[] | String
  poster_lt?: String
  poster_lte?: String
  poster_gt?: String
  poster_gte?: String
  poster_contains?: String
  poster_not_contains?: String
  poster_starts_with?: String
  poster_not_starts_with?: String
  poster_ends_with?: String
  poster_not_ends_with?: String
  runtime?: DateTime
  runtime_not?: DateTime
  runtime_in?: DateTime[] | DateTime
  runtime_not_in?: DateTime[] | DateTime
  runtime_lt?: DateTime
  runtime_lte?: DateTime
  runtime_gt?: DateTime
  runtime_gte?: DateTime
  director?: String
  director_not?: String
  director_in?: String[] | String
  director_not_in?: String[] | String
  director_lt?: String
  director_lte?: String
  director_gt?: String
  director_gte?: String
  director_contains?: String
  director_not_contains?: String
  director_starts_with?: String
  director_not_starts_with?: String
  director_ends_with?: String
  director_not_ends_with?: String
  actors?: String
  actors_not?: String
  actors_in?: String[] | String
  actors_not_in?: String[] | String
  actors_lt?: String
  actors_lte?: String
  actors_gt?: String
  actors_gte?: String
  actors_contains?: String
  actors_not_contains?: String
  actors_starts_with?: String
  actors_not_starts_with?: String
  actors_ends_with?: String
  actors_not_ends_with?: String
  genres_every?: GenreWhereInput
  genres_some?: GenreWhereInput
  genres_none?: GenreWhereInput
  ratings_every?: RatingWhereInput
  ratings_some?: RatingWhereInput
  ratings_none?: RatingWhereInput
}

export interface RatingCreateInput {
  source: RatingSource
  value?: String
  ratedMovie?: MovieCreateOneWithoutRatingsInput
}

export interface RatingWhereInput {
  AND?: RatingWhereInput[] | RatingWhereInput
  OR?: RatingWhereInput[] | RatingWhereInput
  NOT?: RatingWhereInput[] | RatingWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  source?: RatingSource
  source_not?: RatingSource
  source_in?: RatingSource[] | RatingSource
  source_not_in?: RatingSource[] | RatingSource
  value?: String
  value_not?: String
  value_in?: String[] | String
  value_not_in?: String[] | String
  value_lt?: String
  value_lte?: String
  value_gt?: String
  value_gte?: String
  value_contains?: String
  value_not_contains?: String
  value_starts_with?: String
  value_not_starts_with?: String
  value_ends_with?: String
  value_not_ends_with?: String
  ratedMovie?: MovieWhereInput
}

export interface RatingUpdateWithoutRatedMovieDataInput {
  source?: RatingSource
  value?: String
}

export interface MovieCreateWithoutRatingsInput {
  title: String
  overview: String
  popularity: Float
  releaseDate: DateTime
  poster: String
  runtime: DateTime
  director: String
  actors: String
  genres?: GenreCreateManyInput
}

export interface RatingUpdateWithWhereUniqueWithoutRatedMovieInput {
  where: RatingWhereUniqueInput
  data: RatingUpdateWithoutRatedMovieDataInput
}

export interface MovieCreateOneWithoutRatingsInput {
  create?: MovieCreateWithoutRatingsInput
  connect?: MovieWhereUniqueInput
}

export interface RatingUpdateManyWithoutRatedMovieInput {
  create?: RatingCreateWithoutRatedMovieInput[] | RatingCreateWithoutRatedMovieInput
  connect?: RatingWhereUniqueInput[] | RatingWhereUniqueInput
  disconnect?: RatingWhereUniqueInput[] | RatingWhereUniqueInput
  delete?: RatingWhereUniqueInput[] | RatingWhereUniqueInput
  update?: RatingUpdateWithWhereUniqueWithoutRatedMovieInput[] | RatingUpdateWithWhereUniqueWithoutRatedMovieInput
  upsert?: RatingUpsertWithWhereUniqueWithoutRatedMovieInput[] | RatingUpsertWithWhereUniqueWithoutRatedMovieInput
}

export interface GenreSubscriptionWhereInput {
  AND?: GenreSubscriptionWhereInput[] | GenreSubscriptionWhereInput
  OR?: GenreSubscriptionWhereInput[] | GenreSubscriptionWhereInput
  NOT?: GenreSubscriptionWhereInput[] | GenreSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GenreWhereInput
}

export interface GenreUpsertWithWhereUniqueNestedInput {
  where: GenreWhereUniqueInput
  update: GenreUpdateDataInput
  create: GenreCreateInput
}

export interface MovieSubscriptionWhereInput {
  AND?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput
  OR?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput
  NOT?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MovieWhereInput
}

export interface GenreUpdateDataInput {
  name?: String
}

export interface MovieWhereUniqueInput {
  id?: ID_Input
}

export interface GenreUpdateWithWhereUniqueNestedInput {
  where: GenreWhereUniqueInput
  data: GenreUpdateDataInput
}

export interface GenreWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface MovieCreateInput {
  title: String
  overview: String
  popularity: Float
  releaseDate: DateTime
  poster: String
  runtime: DateTime
  director: String
  actors: String
  genres?: GenreCreateManyInput
  ratings?: RatingCreateManyWithoutRatedMovieInput
}

export interface MovieUpdateWithoutRatingsDataInput {
  title?: String
  overview?: String
  popularity?: Float
  releaseDate?: DateTime
  poster?: String
  runtime?: DateTime
  director?: String
  actors?: String
  genres?: GenreUpdateManyInput
}

export interface GenreCreateManyInput {
  create?: GenreCreateInput[] | GenreCreateInput
  connect?: GenreWhereUniqueInput[] | GenreWhereUniqueInput
}

export interface RatingUpdateInput {
  source?: RatingSource
  value?: String
  ratedMovie?: MovieUpdateOneWithoutRatingsInput
}

export interface GenreUpdateManyInput {
  create?: GenreCreateInput[] | GenreCreateInput
  connect?: GenreWhereUniqueInput[] | GenreWhereUniqueInput
  disconnect?: GenreWhereUniqueInput[] | GenreWhereUniqueInput
  delete?: GenreWhereUniqueInput[] | GenreWhereUniqueInput
  update?: GenreUpdateWithWhereUniqueNestedInput[] | GenreUpdateWithWhereUniqueNestedInput
  upsert?: GenreUpsertWithWhereUniqueNestedInput[] | GenreUpsertWithWhereUniqueNestedInput
}

export interface GenreUpdateInput {
  name?: String
}

export interface MovieUpdateInput {
  title?: String
  overview?: String
  popularity?: Float
  releaseDate?: DateTime
  poster?: String
  runtime?: DateTime
  director?: String
  actors?: String
  genres?: GenreUpdateManyInput
  ratings?: RatingUpdateManyWithoutRatedMovieInput
}

export interface GenreWhereInput {
  AND?: GenreWhereInput[] | GenreWhereInput
  OR?: GenreWhereInput[] | GenreWhereInput
  NOT?: GenreWhereInput[] | GenreWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface RatingCreateWithoutRatedMovieInput {
  source: RatingSource
  value?: String
}

export interface RatingCreateManyWithoutRatedMovieInput {
  create?: RatingCreateWithoutRatedMovieInput[] | RatingCreateWithoutRatedMovieInput
  connect?: RatingWhereUniqueInput[] | RatingWhereUniqueInput
}

export interface RatingWhereUniqueInput {
  id?: ID_Input
}

export interface RatingSubscriptionWhereInput {
  AND?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput
  OR?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput
  NOT?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RatingWhereInput
}

export interface RatingUpsertWithWhereUniqueWithoutRatedMovieInput {
  where: RatingWhereUniqueInput
  update: RatingUpdateWithoutRatedMovieDataInput
  create: RatingCreateWithoutRatedMovieInput
}

export interface MovieUpdateOneWithoutRatingsInput {
  create?: MovieCreateWithoutRatingsInput
  connect?: MovieWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: MovieUpdateWithoutRatingsDataInput
  upsert?: MovieUpsertWithoutRatingsInput
}

export interface MovieUpsertWithoutRatingsInput {
  update: MovieUpdateWithoutRatingsDataInput
  create: MovieCreateWithoutRatingsInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface GenrePreviousValues {
  id: ID_Output
  name: String
}

export interface Rating extends Node {
  id: ID_Output
  source: RatingSource
  value?: String
  ratedMovie?: Movie
}

export interface Movie extends Node {
  id: ID_Output
  title: String
  overview: String
  popularity: Float
  releaseDate: DateTime
  poster: String
  genres?: Genre[]
  runtime: DateTime
  director: String
  actors: String
  ratings?: Rating[]
}

export interface BatchPayload {
  count: Long
}

export interface AggregateGenre {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface MovieConnection {
  pageInfo: PageInfo
  edges: MovieEdge[]
  aggregate: AggregateMovie
}

export interface MoviePreviousValues {
  id: ID_Output
  title: String
  overview: String
  popularity: Float
  releaseDate: DateTime
  poster: String
  runtime: DateTime
  director: String
  actors: String
}

export interface RatingPreviousValues {
  id: ID_Output
  source: RatingSource
  value?: String
}

/*
 * A connection to a list of items.

 */
export interface GenreConnection {
  pageInfo: PageInfo
  edges: GenreEdge[]
  aggregate: AggregateGenre
}

/*
 * An edge in a connection.

 */
export interface GenreEdge {
  node: Genre
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface RatingConnection {
  pageInfo: PageInfo
  edges: RatingEdge[]
  aggregate: AggregateRating
}

/*
 * An edge in a connection.

 */
export interface MovieEdge {
  node: Movie
  cursor: String
}

export interface MovieSubscriptionPayload {
  mutation: MutationType
  node?: Movie
  updatedFields?: String[]
  previousValues?: MoviePreviousValues
}

export interface Genre extends Node {
  id: ID_Output
  name: String
}

export interface RatingSubscriptionPayload {
  mutation: MutationType
  node?: Rating
  updatedFields?: String[]
  previousValues?: RatingPreviousValues
}

export interface AggregateRating {
  count: Int
}

export interface GenreSubscriptionPayload {
  mutation: MutationType
  node?: Genre
  updatedFields?: String[]
  previousValues?: GenrePreviousValues
}

export interface AggregateMovie {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface RatingEdge {
  node: Rating
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string