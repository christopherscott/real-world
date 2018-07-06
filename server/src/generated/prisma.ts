import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    films: <T = Film[]>(args: { where?: FilmWhereInput, orderBy?: FilmOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    persons: <T = Person[]>(args: { where?: PersonWhereInput, orderBy?: PersonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    genres: <T = Genre[]>(args: { where?: GenreWhereInput, orderBy?: GenreOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    film: <T = Film | null>(args: { where: FilmWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    person: <T = Person | null>(args: { where: PersonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    genre: <T = Genre | null>(args: { where: GenreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filmsConnection: <T = FilmConnection>(args: { where?: FilmWhereInput, orderBy?: FilmOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    personsConnection: <T = PersonConnection>(args: { where?: PersonWhereInput, orderBy?: PersonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    genresConnection: <T = GenreConnection>(args: { where?: GenreWhereInput, orderBy?: GenreOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createFilm: <T = Film>(args: { data: FilmCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPerson: <T = Person>(args: { data: PersonCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGenre: <T = Genre>(args: { data: GenreCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFilm: <T = Film | null>(args: { data: FilmUpdateInput, where: FilmWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePerson: <T = Person | null>(args: { data: PersonUpdateInput, where: PersonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGenre: <T = Genre | null>(args: { data: GenreUpdateInput, where: GenreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFilm: <T = Film | null>(args: { where: FilmWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePerson: <T = Person | null>(args: { where: PersonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGenre: <T = Genre | null>(args: { where: GenreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFilm: <T = Film>(args: { where: FilmWhereUniqueInput, create: FilmCreateInput, update: FilmUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPerson: <T = Person>(args: { where: PersonWhereUniqueInput, create: PersonCreateInput, update: PersonUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGenre: <T = Genre>(args: { where: GenreWhereUniqueInput, create: GenreCreateInput, update: GenreUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFilms: <T = BatchPayload>(args: { data: FilmUpdateInput, where?: FilmWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPersons: <T = BatchPayload>(args: { data: PersonUpdateInput, where?: PersonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGenres: <T = BatchPayload>(args: { data: GenreUpdateInput, where?: GenreWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFilms: <T = BatchPayload>(args: { where?: FilmWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPersons: <T = BatchPayload>(args: { where?: PersonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGenres: <T = BatchPayload>(args: { where?: GenreWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    film: <T = FilmSubscriptionPayload | null>(args: { where?: FilmSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    person: <T = PersonSubscriptionPayload | null>(args: { where?: PersonSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    genre: <T = GenreSubscriptionPayload | null>(args: { where?: GenreSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Film: (where?: FilmWhereInput) => Promise<boolean>
  Person: (where?: PersonWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateComment {
  count: Int!
}

type AggregateFilm {
  count: Int!
}

type AggregateGenre {
  count: Int!
}

type AggregatePerson {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Comment implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  film(where: FilmWhereInput): Film!
  text: String!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  text: String!
  user: UserCreateOneInput!
  film: FilmCreateOneWithoutCommentsInput!
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutFilmInput {
  create: [CommentCreateWithoutFilmInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutFilmInput {
  text: String!
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommentPreviousValues {
  id: ID!
  text: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

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
  node: CommentWhereInput
}

input CommentUpdateDataInput {
  text: String
  user: UserUpdateOneInput
  film: FilmUpdateOneWithoutCommentsInput
}

input CommentUpdateInput {
  text: String
  user: UserUpdateOneInput
  film: FilmUpdateOneWithoutCommentsInput
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
}

input CommentUpdateManyWithoutFilmInput {
  create: [CommentCreateWithoutFilmInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutFilmInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutFilmInput!]
}

input CommentUpdateWithoutFilmDataInput {
  text: String
  user: UserUpdateOneInput
}

input CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateDataInput!
}

input CommentUpdateWithWhereUniqueWithoutFilmInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutFilmDataInput!
}

input CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentUpsertWithWhereUniqueWithoutFilmInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutFilmDataInput!
  create: CommentCreateWithoutFilmInput!
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
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
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  user: UserWhereInput
  film: FilmWhereInput
  _MagicalBackRelation_CommentToPerson_every: PersonWhereInput
  _MagicalBackRelation_CommentToPerson_some: PersonWhereInput
  _MagicalBackRelation_CommentToPerson_none: PersonWhereInput
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type Film implements Node {
  id: ID!
  title: String!
  year: DateTime!
  runtime: DateTime!
  plot: String!
  poster: String!
  rating: Float!
  votes: Int!
  genres(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Genre!]
  directors(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person!]
  writers(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person!]
  actors(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

"""A connection to a list of items."""
type FilmConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FilmEdge]!
  aggregate: AggregateFilm!
}

input FilmCreateInput {
  title: String!
  year: DateTime!
  runtime: DateTime!
  plot: String!
  poster: String!
  rating: Float!
  votes: Int!
  genres: GenreCreateManyInput
  directors: PersonCreateManyWithoutDirectedFilmsInput
  writers: PersonCreateManyWithoutWrittenFilmsInput
  actors: PersonCreateManyWithoutPlayedFilmsInput
  comments: CommentCreateManyWithoutFilmInput
}

input FilmCreateManyWithoutActorsInput {
  create: [FilmCreateWithoutActorsInput!]
  connect: [FilmWhereUniqueInput!]
}

input FilmCreateManyWithoutDirectorsInput {
  create: [FilmCreateWithoutDirectorsInput!]
  connect: [FilmWhereUniqueInput!]
}

input FilmCreateManyWithoutWritersInput {
  create: [FilmCreateWithoutWritersInput!]
  connect: [FilmWhereUniqueInput!]
}

input FilmCreateOneWithoutCommentsInput {
  create: FilmCreateWithoutCommentsInput
  connect: FilmWhereUniqueInput
}

input FilmCreateWithoutActorsInput {
  title: String!
  year: DateTime!
  runtime: DateTime!
  plot: String!
  poster: String!
  rating: Float!
  votes: Int!
  genres: GenreCreateManyInput
  directors: PersonCreateManyWithoutDirectedFilmsInput
  writers: PersonCreateManyWithoutWrittenFilmsInput
  comments: CommentCreateManyWithoutFilmInput
}

input FilmCreateWithoutCommentsInput {
  title: String!
  year: DateTime!
  runtime: DateTime!
  plot: String!
  poster: String!
  rating: Float!
  votes: Int!
  genres: GenreCreateManyInput
  directors: PersonCreateManyWithoutDirectedFilmsInput
  writers: PersonCreateManyWithoutWrittenFilmsInput
  actors: PersonCreateManyWithoutPlayedFilmsInput
}

input FilmCreateWithoutDirectorsInput {
  title: String!
  year: DateTime!
  runtime: DateTime!
  plot: String!
  poster: String!
  rating: Float!
  votes: Int!
  genres: GenreCreateManyInput
  writers: PersonCreateManyWithoutWrittenFilmsInput
  actors: PersonCreateManyWithoutPlayedFilmsInput
  comments: CommentCreateManyWithoutFilmInput
}

input FilmCreateWithoutWritersInput {
  title: String!
  year: DateTime!
  runtime: DateTime!
  plot: String!
  poster: String!
  rating: Float!
  votes: Int!
  genres: GenreCreateManyInput
  directors: PersonCreateManyWithoutDirectedFilmsInput
  actors: PersonCreateManyWithoutPlayedFilmsInput
  comments: CommentCreateManyWithoutFilmInput
}

"""An edge in a connection."""
type FilmEdge {
  """The item at the end of the edge."""
  node: Film!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FilmOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  year_ASC
  year_DESC
  runtime_ASC
  runtime_DESC
  plot_ASC
  plot_DESC
  poster_ASC
  poster_DESC
  rating_ASC
  rating_DESC
  votes_ASC
  votes_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FilmPreviousValues {
  id: ID!
  title: String!
  year: DateTime!
  runtime: DateTime!
  plot: String!
  poster: String!
  rating: Float!
  votes: Int!
}

type FilmSubscriptionPayload {
  mutation: MutationType!
  node: Film
  updatedFields: [String!]
  previousValues: FilmPreviousValues
}

input FilmSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FilmSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FilmSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FilmSubscriptionWhereInput!]

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
  node: FilmWhereInput
}

input FilmUpdateInput {
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres: GenreUpdateManyInput
  directors: PersonUpdateManyWithoutDirectedFilmsInput
  writers: PersonUpdateManyWithoutWrittenFilmsInput
  actors: PersonUpdateManyWithoutPlayedFilmsInput
  comments: CommentUpdateManyWithoutFilmInput
}

input FilmUpdateManyWithoutActorsInput {
  create: [FilmCreateWithoutActorsInput!]
  connect: [FilmWhereUniqueInput!]
  disconnect: [FilmWhereUniqueInput!]
  delete: [FilmWhereUniqueInput!]
  update: [FilmUpdateWithWhereUniqueWithoutActorsInput!]
  upsert: [FilmUpsertWithWhereUniqueWithoutActorsInput!]
}

input FilmUpdateManyWithoutDirectorsInput {
  create: [FilmCreateWithoutDirectorsInput!]
  connect: [FilmWhereUniqueInput!]
  disconnect: [FilmWhereUniqueInput!]
  delete: [FilmWhereUniqueInput!]
  update: [FilmUpdateWithWhereUniqueWithoutDirectorsInput!]
  upsert: [FilmUpsertWithWhereUniqueWithoutDirectorsInput!]
}

input FilmUpdateManyWithoutWritersInput {
  create: [FilmCreateWithoutWritersInput!]
  connect: [FilmWhereUniqueInput!]
  disconnect: [FilmWhereUniqueInput!]
  delete: [FilmWhereUniqueInput!]
  update: [FilmUpdateWithWhereUniqueWithoutWritersInput!]
  upsert: [FilmUpsertWithWhereUniqueWithoutWritersInput!]
}

input FilmUpdateOneWithoutCommentsInput {
  create: FilmCreateWithoutCommentsInput
  connect: FilmWhereUniqueInput
  delete: Boolean
  update: FilmUpdateWithoutCommentsDataInput
  upsert: FilmUpsertWithoutCommentsInput
}

input FilmUpdateWithoutActorsDataInput {
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres: GenreUpdateManyInput
  directors: PersonUpdateManyWithoutDirectedFilmsInput
  writers: PersonUpdateManyWithoutWrittenFilmsInput
  comments: CommentUpdateManyWithoutFilmInput
}

input FilmUpdateWithoutCommentsDataInput {
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres: GenreUpdateManyInput
  directors: PersonUpdateManyWithoutDirectedFilmsInput
  writers: PersonUpdateManyWithoutWrittenFilmsInput
  actors: PersonUpdateManyWithoutPlayedFilmsInput
}

input FilmUpdateWithoutDirectorsDataInput {
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres: GenreUpdateManyInput
  writers: PersonUpdateManyWithoutWrittenFilmsInput
  actors: PersonUpdateManyWithoutPlayedFilmsInput
  comments: CommentUpdateManyWithoutFilmInput
}

input FilmUpdateWithoutWritersDataInput {
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres: GenreUpdateManyInput
  directors: PersonUpdateManyWithoutDirectedFilmsInput
  actors: PersonUpdateManyWithoutPlayedFilmsInput
  comments: CommentUpdateManyWithoutFilmInput
}

input FilmUpdateWithWhereUniqueWithoutActorsInput {
  where: FilmWhereUniqueInput!
  data: FilmUpdateWithoutActorsDataInput!
}

input FilmUpdateWithWhereUniqueWithoutDirectorsInput {
  where: FilmWhereUniqueInput!
  data: FilmUpdateWithoutDirectorsDataInput!
}

input FilmUpdateWithWhereUniqueWithoutWritersInput {
  where: FilmWhereUniqueInput!
  data: FilmUpdateWithoutWritersDataInput!
}

input FilmUpsertWithoutCommentsInput {
  update: FilmUpdateWithoutCommentsDataInput!
  create: FilmCreateWithoutCommentsInput!
}

input FilmUpsertWithWhereUniqueWithoutActorsInput {
  where: FilmWhereUniqueInput!
  update: FilmUpdateWithoutActorsDataInput!
  create: FilmCreateWithoutActorsInput!
}

input FilmUpsertWithWhereUniqueWithoutDirectorsInput {
  where: FilmWhereUniqueInput!
  update: FilmUpdateWithoutDirectorsDataInput!
  create: FilmCreateWithoutDirectorsInput!
}

input FilmUpsertWithWhereUniqueWithoutWritersInput {
  where: FilmWhereUniqueInput!
  update: FilmUpdateWithoutWritersDataInput!
  create: FilmCreateWithoutWritersInput!
}

input FilmWhereInput {
  """Logical AND on all given filters."""
  AND: [FilmWhereInput!]

  """Logical OR on all given filters."""
  OR: [FilmWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FilmWhereInput!]
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
  year: DateTime

  """All values that are not equal to given value."""
  year_not: DateTime

  """All values that are contained in given list."""
  year_in: [DateTime!]

  """All values that are not contained in given list."""
  year_not_in: [DateTime!]

  """All values less than the given value."""
  year_lt: DateTime

  """All values less than or equal the given value."""
  year_lte: DateTime

  """All values greater than the given value."""
  year_gt: DateTime

  """All values greater than or equal the given value."""
  year_gte: DateTime
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
  plot: String

  """All values that are not equal to given value."""
  plot_not: String

  """All values that are contained in given list."""
  plot_in: [String!]

  """All values that are not contained in given list."""
  plot_not_in: [String!]

  """All values less than the given value."""
  plot_lt: String

  """All values less than or equal the given value."""
  plot_lte: String

  """All values greater than the given value."""
  plot_gt: String

  """All values greater than or equal the given value."""
  plot_gte: String

  """All values containing the given string."""
  plot_contains: String

  """All values not containing the given string."""
  plot_not_contains: String

  """All values starting with the given string."""
  plot_starts_with: String

  """All values not starting with the given string."""
  plot_not_starts_with: String

  """All values ending with the given string."""
  plot_ends_with: String

  """All values not ending with the given string."""
  plot_not_ends_with: String
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
  rating: Float

  """All values that are not equal to given value."""
  rating_not: Float

  """All values that are contained in given list."""
  rating_in: [Float!]

  """All values that are not contained in given list."""
  rating_not_in: [Float!]

  """All values less than the given value."""
  rating_lt: Float

  """All values less than or equal the given value."""
  rating_lte: Float

  """All values greater than the given value."""
  rating_gt: Float

  """All values greater than or equal the given value."""
  rating_gte: Float
  votes: Int

  """All values that are not equal to given value."""
  votes_not: Int

  """All values that are contained in given list."""
  votes_in: [Int!]

  """All values that are not contained in given list."""
  votes_not_in: [Int!]

  """All values less than the given value."""
  votes_lt: Int

  """All values less than or equal the given value."""
  votes_lte: Int

  """All values greater than the given value."""
  votes_gt: Int

  """All values greater than or equal the given value."""
  votes_gte: Int
  genres_every: GenreWhereInput
  genres_some: GenreWhereInput
  genres_none: GenreWhereInput
  directors_every: PersonWhereInput
  directors_some: PersonWhereInput
  directors_none: PersonWhereInput
  writers_every: PersonWhereInput
  writers_some: PersonWhereInput
  writers_none: PersonWhereInput
  actors_every: PersonWhereInput
  actors_some: PersonWhereInput
  actors_none: PersonWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
}

input FilmWhereUniqueInput {
  id: ID
}

type Genre implements Node {
  id: ID!
  genre: String!
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
  genre: String!
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
  genre_ASC
  genre_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type GenrePreviousValues {
  id: ID!
  genre: String!
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
  genre: String
}

input GenreUpdateInput {
  genre: String
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
  genre: String

  """All values that are not equal to given value."""
  genre_not: String

  """All values that are contained in given list."""
  genre_in: [String!]

  """All values that are not contained in given list."""
  genre_not_in: [String!]

  """All values less than the given value."""
  genre_lt: String

  """All values less than or equal the given value."""
  genre_lte: String

  """All values greater than the given value."""
  genre_gt: String

  """All values greater than or equal the given value."""
  genre_gte: String

  """All values containing the given string."""
  genre_contains: String

  """All values not containing the given string."""
  genre_not_contains: String

  """All values starting with the given string."""
  genre_starts_with: String

  """All values not starting with the given string."""
  genre_not_starts_with: String

  """All values ending with the given string."""
  genre_ends_with: String

  """All values not ending with the given string."""
  genre_not_ends_with: String
  _MagicalBackRelation_FilmToGenre_every: FilmWhereInput
  _MagicalBackRelation_FilmToGenre_some: FilmWhereInput
  _MagicalBackRelation_FilmToGenre_none: FilmWhereInput
}

input GenreWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createFilm(data: FilmCreateInput!): Film!
  createPerson(data: PersonCreateInput!): Person!
  createComment(data: CommentCreateInput!): Comment!
  createUser(data: UserCreateInput!): User!
  createGenre(data: GenreCreateInput!): Genre!
  updateFilm(data: FilmUpdateInput!, where: FilmWhereUniqueInput!): Film
  updatePerson(data: PersonUpdateInput!, where: PersonWhereUniqueInput!): Person
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateGenre(data: GenreUpdateInput!, where: GenreWhereUniqueInput!): Genre
  deleteFilm(where: FilmWhereUniqueInput!): Film
  deletePerson(where: PersonWhereUniqueInput!): Person
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteUser(where: UserWhereUniqueInput!): User
  deleteGenre(where: GenreWhereUniqueInput!): Genre
  upsertFilm(where: FilmWhereUniqueInput!, create: FilmCreateInput!, update: FilmUpdateInput!): Film!
  upsertPerson(where: PersonWhereUniqueInput!, create: PersonCreateInput!, update: PersonUpdateInput!): Person!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertGenre(where: GenreWhereUniqueInput!, create: GenreCreateInput!, update: GenreUpdateInput!): Genre!
  updateManyFilms(data: FilmUpdateInput!, where: FilmWhereInput): BatchPayload!
  updateManyPersons(data: PersonUpdateInput!, where: PersonWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyGenres(data: GenreUpdateInput!, where: GenreWhereInput): BatchPayload!
  deleteManyFilms(where: FilmWhereInput): BatchPayload!
  deleteManyPersons(where: PersonWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
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

type Person implements Node {
  id: ID!
  firstName: String!
  lastName: String!
  directedFilms(where: FilmWhereInput, orderBy: FilmOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Film!]
  writtenFilms(where: FilmWhereInput, orderBy: FilmOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Film!]
  playedFilms(where: FilmWhereInput, orderBy: FilmOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Film!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

"""A connection to a list of items."""
type PersonConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PersonEdge]!
  aggregate: AggregatePerson!
}

input PersonCreateInput {
  firstName: String!
  lastName: String!
  directedFilms: FilmCreateManyWithoutDirectorsInput
  writtenFilms: FilmCreateManyWithoutWritersInput
  playedFilms: FilmCreateManyWithoutActorsInput
  comments: CommentCreateManyInput
}

input PersonCreateManyWithoutDirectedFilmsInput {
  create: [PersonCreateWithoutDirectedFilmsInput!]
  connect: [PersonWhereUniqueInput!]
}

input PersonCreateManyWithoutPlayedFilmsInput {
  create: [PersonCreateWithoutPlayedFilmsInput!]
  connect: [PersonWhereUniqueInput!]
}

input PersonCreateManyWithoutWrittenFilmsInput {
  create: [PersonCreateWithoutWrittenFilmsInput!]
  connect: [PersonWhereUniqueInput!]
}

input PersonCreateWithoutDirectedFilmsInput {
  firstName: String!
  lastName: String!
  writtenFilms: FilmCreateManyWithoutWritersInput
  playedFilms: FilmCreateManyWithoutActorsInput
  comments: CommentCreateManyInput
}

input PersonCreateWithoutPlayedFilmsInput {
  firstName: String!
  lastName: String!
  directedFilms: FilmCreateManyWithoutDirectorsInput
  writtenFilms: FilmCreateManyWithoutWritersInput
  comments: CommentCreateManyInput
}

input PersonCreateWithoutWrittenFilmsInput {
  firstName: String!
  lastName: String!
  directedFilms: FilmCreateManyWithoutDirectorsInput
  playedFilms: FilmCreateManyWithoutActorsInput
  comments: CommentCreateManyInput
}

"""An edge in a connection."""
type PersonEdge {
  """The item at the end of the edge."""
  node: Person!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PersonOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PersonPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
}

type PersonSubscriptionPayload {
  mutation: MutationType!
  node: Person
  updatedFields: [String!]
  previousValues: PersonPreviousValues
}

input PersonSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PersonSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PersonSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PersonSubscriptionWhereInput!]

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
  node: PersonWhereInput
}

input PersonUpdateInput {
  firstName: String
  lastName: String
  directedFilms: FilmUpdateManyWithoutDirectorsInput
  writtenFilms: FilmUpdateManyWithoutWritersInput
  playedFilms: FilmUpdateManyWithoutActorsInput
  comments: CommentUpdateManyInput
}

input PersonUpdateManyWithoutDirectedFilmsInput {
  create: [PersonCreateWithoutDirectedFilmsInput!]
  connect: [PersonWhereUniqueInput!]
  disconnect: [PersonWhereUniqueInput!]
  delete: [PersonWhereUniqueInput!]
  update: [PersonUpdateWithWhereUniqueWithoutDirectedFilmsInput!]
  upsert: [PersonUpsertWithWhereUniqueWithoutDirectedFilmsInput!]
}

input PersonUpdateManyWithoutPlayedFilmsInput {
  create: [PersonCreateWithoutPlayedFilmsInput!]
  connect: [PersonWhereUniqueInput!]
  disconnect: [PersonWhereUniqueInput!]
  delete: [PersonWhereUniqueInput!]
  update: [PersonUpdateWithWhereUniqueWithoutPlayedFilmsInput!]
  upsert: [PersonUpsertWithWhereUniqueWithoutPlayedFilmsInput!]
}

input PersonUpdateManyWithoutWrittenFilmsInput {
  create: [PersonCreateWithoutWrittenFilmsInput!]
  connect: [PersonWhereUniqueInput!]
  disconnect: [PersonWhereUniqueInput!]
  delete: [PersonWhereUniqueInput!]
  update: [PersonUpdateWithWhereUniqueWithoutWrittenFilmsInput!]
  upsert: [PersonUpsertWithWhereUniqueWithoutWrittenFilmsInput!]
}

input PersonUpdateWithoutDirectedFilmsDataInput {
  firstName: String
  lastName: String
  writtenFilms: FilmUpdateManyWithoutWritersInput
  playedFilms: FilmUpdateManyWithoutActorsInput
  comments: CommentUpdateManyInput
}

input PersonUpdateWithoutPlayedFilmsDataInput {
  firstName: String
  lastName: String
  directedFilms: FilmUpdateManyWithoutDirectorsInput
  writtenFilms: FilmUpdateManyWithoutWritersInput
  comments: CommentUpdateManyInput
}

input PersonUpdateWithoutWrittenFilmsDataInput {
  firstName: String
  lastName: String
  directedFilms: FilmUpdateManyWithoutDirectorsInput
  playedFilms: FilmUpdateManyWithoutActorsInput
  comments: CommentUpdateManyInput
}

input PersonUpdateWithWhereUniqueWithoutDirectedFilmsInput {
  where: PersonWhereUniqueInput!
  data: PersonUpdateWithoutDirectedFilmsDataInput!
}

input PersonUpdateWithWhereUniqueWithoutPlayedFilmsInput {
  where: PersonWhereUniqueInput!
  data: PersonUpdateWithoutPlayedFilmsDataInput!
}

input PersonUpdateWithWhereUniqueWithoutWrittenFilmsInput {
  where: PersonWhereUniqueInput!
  data: PersonUpdateWithoutWrittenFilmsDataInput!
}

input PersonUpsertWithWhereUniqueWithoutDirectedFilmsInput {
  where: PersonWhereUniqueInput!
  update: PersonUpdateWithoutDirectedFilmsDataInput!
  create: PersonCreateWithoutDirectedFilmsInput!
}

input PersonUpsertWithWhereUniqueWithoutPlayedFilmsInput {
  where: PersonWhereUniqueInput!
  update: PersonUpdateWithoutPlayedFilmsDataInput!
  create: PersonCreateWithoutPlayedFilmsInput!
}

input PersonUpsertWithWhereUniqueWithoutWrittenFilmsInput {
  where: PersonWhereUniqueInput!
  update: PersonUpdateWithoutWrittenFilmsDataInput!
  create: PersonCreateWithoutWrittenFilmsInput!
}

input PersonWhereInput {
  """Logical AND on all given filters."""
  AND: [PersonWhereInput!]

  """Logical OR on all given filters."""
  OR: [PersonWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PersonWhereInput!]
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
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  directedFilms_every: FilmWhereInput
  directedFilms_some: FilmWhereInput
  directedFilms_none: FilmWhereInput
  writtenFilms_every: FilmWhereInput
  writtenFilms_some: FilmWhereInput
  writtenFilms_none: FilmWhereInput
  playedFilms_every: FilmWhereInput
  playedFilms_some: FilmWhereInput
  playedFilms_none: FilmWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
}

input PersonWhereUniqueInput {
  id: ID
}

type Query {
  films(where: FilmWhereInput, orderBy: FilmOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Film]!
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  genres(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Genre]!
  film(where: FilmWhereUniqueInput!): Film
  person(where: PersonWhereUniqueInput!): Person
  comment(where: CommentWhereUniqueInput!): Comment
  user(where: UserWhereUniqueInput!): User
  genre(where: GenreWhereUniqueInput!): Genre
  filmsConnection(where: FilmWhereInput, orderBy: FilmOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FilmConnection!
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  genresConnection(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GenreConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  film(where: FilmSubscriptionWhereInput): FilmSubscriptionPayload
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  genre(where: GenreSubscriptionWhereInput): GenreSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

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
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
}

input UserUpdateInput {
  name: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
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
  _MagicalBackRelation_CommentToUser_every: CommentWhereInput
  _MagicalBackRelation_CommentToUser_some: CommentWhereInput
  _MagicalBackRelation_CommentToUser_none: CommentWhereInput
}

input UserWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type FilmOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'year_ASC' |
  'year_DESC' |
  'runtime_ASC' |
  'runtime_DESC' |
  'plot_ASC' |
  'plot_DESC' |
  'poster_ASC' |
  'poster_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'votes_ASC' |
  'votes_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type GenreOrderByInput =   'id_ASC' |
  'id_DESC' |
  'genre_ASC' |
  'genre_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PersonOrderByInput =   'id_ASC' |
  'id_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface PersonCreateInput {
  firstName: String
  lastName: String
  directedFilms?: FilmCreateManyWithoutDirectorsInput
  writtenFilms?: FilmCreateManyWithoutWritersInput
  playedFilms?: FilmCreateManyWithoutActorsInput
  comments?: CommentCreateManyInput
}

export interface FilmWhereInput {
  AND?: FilmWhereInput[] | FilmWhereInput
  OR?: FilmWhereInput[] | FilmWhereInput
  NOT?: FilmWhereInput[] | FilmWhereInput
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
  year?: DateTime
  year_not?: DateTime
  year_in?: DateTime[] | DateTime
  year_not_in?: DateTime[] | DateTime
  year_lt?: DateTime
  year_lte?: DateTime
  year_gt?: DateTime
  year_gte?: DateTime
  runtime?: DateTime
  runtime_not?: DateTime
  runtime_in?: DateTime[] | DateTime
  runtime_not_in?: DateTime[] | DateTime
  runtime_lt?: DateTime
  runtime_lte?: DateTime
  runtime_gt?: DateTime
  runtime_gte?: DateTime
  plot?: String
  plot_not?: String
  plot_in?: String[] | String
  plot_not_in?: String[] | String
  plot_lt?: String
  plot_lte?: String
  plot_gt?: String
  plot_gte?: String
  plot_contains?: String
  plot_not_contains?: String
  plot_starts_with?: String
  plot_not_starts_with?: String
  plot_ends_with?: String
  plot_not_ends_with?: String
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
  rating?: Float
  rating_not?: Float
  rating_in?: Float[] | Float
  rating_not_in?: Float[] | Float
  rating_lt?: Float
  rating_lte?: Float
  rating_gt?: Float
  rating_gte?: Float
  votes?: Int
  votes_not?: Int
  votes_in?: Int[] | Int
  votes_not_in?: Int[] | Int
  votes_lt?: Int
  votes_lte?: Int
  votes_gt?: Int
  votes_gte?: Int
  genres_every?: GenreWhereInput
  genres_some?: GenreWhereInput
  genres_none?: GenreWhereInput
  directors_every?: PersonWhereInput
  directors_some?: PersonWhereInput
  directors_none?: PersonWhereInput
  writers_every?: PersonWhereInput
  writers_some?: PersonWhereInput
  writers_none?: PersonWhereInput
  actors_every?: PersonWhereInput
  actors_some?: PersonWhereInput
  actors_none?: PersonWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
}

export interface GenreUpdateDataInput {
  genre?: String
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
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
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  user?: UserWhereInput
  film?: FilmWhereInput
  _MagicalBackRelation_CommentToPerson_every?: PersonWhereInput
  _MagicalBackRelation_CommentToPerson_some?: PersonWhereInput
  _MagicalBackRelation_CommentToPerson_none?: PersonWhereInput
}

export interface GenreUpsertWithWhereUniqueNestedInput {
  where: GenreWhereUniqueInput
  update: GenreUpdateDataInput
  create: GenreCreateInput
}

export interface PersonWhereInput {
  AND?: PersonWhereInput[] | PersonWhereInput
  OR?: PersonWhereInput[] | PersonWhereInput
  NOT?: PersonWhereInput[] | PersonWhereInput
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
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  directedFilms_every?: FilmWhereInput
  directedFilms_some?: FilmWhereInput
  directedFilms_none?: FilmWhereInput
  writtenFilms_every?: FilmWhereInput
  writtenFilms_some?: FilmWhereInput
  writtenFilms_none?: FilmWhereInput
  playedFilms_every?: FilmWhereInput
  playedFilms_some?: FilmWhereInput
  playedFilms_none?: FilmWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
}

export interface FilmCreateWithoutDirectorsInput {
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres?: GenreCreateManyInput
  writers?: PersonCreateManyWithoutWrittenFilmsInput
  actors?: PersonCreateManyWithoutPlayedFilmsInput
  comments?: CommentCreateManyWithoutFilmInput
}

export interface CommentUpdateWithoutFilmDataInput {
  text?: String
  user?: UserUpdateOneInput
}

export interface PersonCreateManyWithoutWrittenFilmsInput {
  create?: PersonCreateWithoutWrittenFilmsInput[] | PersonCreateWithoutWrittenFilmsInput
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
}

export interface PersonUpdateManyWithoutDirectedFilmsInput {
  create?: PersonCreateWithoutDirectedFilmsInput[] | PersonCreateWithoutDirectedFilmsInput
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
  disconnect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
  delete?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
  update?: PersonUpdateWithWhereUniqueWithoutDirectedFilmsInput[] | PersonUpdateWithWhereUniqueWithoutDirectedFilmsInput
  upsert?: PersonUpsertWithWhereUniqueWithoutDirectedFilmsInput[] | PersonUpsertWithWhereUniqueWithoutDirectedFilmsInput
}

export interface PersonCreateWithoutWrittenFilmsInput {
  firstName: String
  lastName: String
  directedFilms?: FilmCreateManyWithoutDirectorsInput
  playedFilms?: FilmCreateManyWithoutActorsInput
  comments?: CommentCreateManyInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface FilmCreateManyWithoutActorsInput {
  create?: FilmCreateWithoutActorsInput[] | FilmCreateWithoutActorsInput
  connect?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
}

export interface PersonSubscriptionWhereInput {
  AND?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput
  OR?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput
  NOT?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PersonWhereInput
}

export interface FilmCreateWithoutActorsInput {
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres?: GenreCreateManyInput
  directors?: PersonCreateManyWithoutDirectedFilmsInput
  writers?: PersonCreateManyWithoutWrittenFilmsInput
  comments?: CommentCreateManyWithoutFilmInput
}

export interface GenreUpdateInput {
  genre?: String
}

export interface CommentCreateManyWithoutFilmInput {
  create?: CommentCreateWithoutFilmInput[] | CommentCreateWithoutFilmInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface FilmWhereUniqueInput {
  id?: ID_Input
}

export interface CommentCreateWithoutFilmInput {
  text: String
  user: UserCreateOneInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface GenreWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  name: String
}

export interface PersonUpdateInput {
  firstName?: String
  lastName?: String
  directedFilms?: FilmUpdateManyWithoutDirectorsInput
  writtenFilms?: FilmUpdateManyWithoutWritersInput
  playedFilms?: FilmUpdateManyWithoutActorsInput
  comments?: CommentUpdateManyInput
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface FilmUpsertWithWhereUniqueWithoutWritersInput {
  where: FilmWhereUniqueInput
  update: FilmUpdateWithoutWritersDataInput
  create: FilmCreateWithoutWritersInput
}

export interface CommentCreateInput {
  text: String
  user: UserCreateOneInput
  film: FilmCreateOneWithoutCommentsInput
}

export interface FilmUpsertWithWhereUniqueWithoutDirectorsInput {
  where: FilmWhereUniqueInput
  update: FilmUpdateWithoutDirectorsDataInput
  create: FilmCreateWithoutDirectorsInput
}

export interface FilmCreateOneWithoutCommentsInput {
  create?: FilmCreateWithoutCommentsInput
  connect?: FilmWhereUniqueInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface FilmCreateWithoutCommentsInput {
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres?: GenreCreateManyInput
  directors?: PersonCreateManyWithoutDirectedFilmsInput
  writers?: PersonCreateManyWithoutWrittenFilmsInput
  actors?: PersonCreateManyWithoutPlayedFilmsInput
}

export interface FilmUpdateWithoutCommentsDataInput {
  title?: String
  year?: DateTime
  runtime?: DateTime
  plot?: String
  poster?: String
  rating?: Float
  votes?: Int
  genres?: GenreUpdateManyInput
  directors?: PersonUpdateManyWithoutDirectedFilmsInput
  writers?: PersonUpdateManyWithoutWrittenFilmsInput
  actors?: PersonUpdateManyWithoutPlayedFilmsInput
}

export interface UserUpdateDataInput {
  name?: String
}

export interface CommentUpdateDataInput {
  text?: String
  user?: UserUpdateOneInput
  film?: FilmUpdateOneWithoutCommentsInput
}

export interface FilmUpdateInput {
  title?: String
  year?: DateTime
  runtime?: DateTime
  plot?: String
  poster?: String
  rating?: Float
  votes?: Int
  genres?: GenreUpdateManyInput
  directors?: PersonUpdateManyWithoutDirectedFilmsInput
  writers?: PersonUpdateManyWithoutWrittenFilmsInput
  actors?: PersonUpdateManyWithoutPlayedFilmsInput
  comments?: CommentUpdateManyWithoutFilmInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface GenreUpdateManyInput {
  create?: GenreCreateInput[] | GenreCreateInput
  connect?: GenreWhereUniqueInput[] | GenreWhereUniqueInput
  disconnect?: GenreWhereUniqueInput[] | GenreWhereUniqueInput
  delete?: GenreWhereUniqueInput[] | GenreWhereUniqueInput
  update?: GenreUpdateWithWhereUniqueNestedInput[] | GenreUpdateWithWhereUniqueNestedInput
  upsert?: GenreUpsertWithWhereUniqueNestedInput[] | GenreUpsertWithWhereUniqueNestedInput
}

export interface CommentUpsertWithWhereUniqueWithoutFilmInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateWithoutFilmDataInput
  create: CommentCreateWithoutFilmInput
}

export interface GenreUpdateWithWhereUniqueNestedInput {
  where: GenreWhereUniqueInput
  data: GenreUpdateDataInput
}

export interface FilmCreateInput {
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres?: GenreCreateManyInput
  directors?: PersonCreateManyWithoutDirectedFilmsInput
  writers?: PersonCreateManyWithoutWrittenFilmsInput
  actors?: PersonCreateManyWithoutPlayedFilmsInput
  comments?: CommentCreateManyWithoutFilmInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
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
  _MagicalBackRelation_CommentToUser_every?: CommentWhereInput
  _MagicalBackRelation_CommentToUser_some?: CommentWhereInput
  _MagicalBackRelation_CommentToUser_none?: CommentWhereInput
}

export interface GenreCreateInput {
  genre: String
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface PersonCreateWithoutDirectedFilmsInput {
  firstName: String
  lastName: String
  writtenFilms?: FilmCreateManyWithoutWritersInput
  playedFilms?: FilmCreateManyWithoutActorsInput
  comments?: CommentCreateManyInput
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
  genre?: String
  genre_not?: String
  genre_in?: String[] | String
  genre_not_in?: String[] | String
  genre_lt?: String
  genre_lte?: String
  genre_gt?: String
  genre_gte?: String
  genre_contains?: String
  genre_not_contains?: String
  genre_starts_with?: String
  genre_not_starts_with?: String
  genre_ends_with?: String
  genre_not_ends_with?: String
  _MagicalBackRelation_FilmToGenre_every?: FilmWhereInput
  _MagicalBackRelation_FilmToGenre_some?: FilmWhereInput
  _MagicalBackRelation_FilmToGenre_none?: FilmWhereInput
}

export interface FilmCreateWithoutWritersInput {
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres?: GenreCreateManyInput
  directors?: PersonCreateManyWithoutDirectedFilmsInput
  actors?: PersonCreateManyWithoutPlayedFilmsInput
  comments?: CommentCreateManyWithoutFilmInput
}

export interface PersonUpdateWithWhereUniqueWithoutDirectedFilmsInput {
  where: PersonWhereUniqueInput
  data: PersonUpdateWithoutDirectedFilmsDataInput
}

export interface PersonCreateWithoutPlayedFilmsInput {
  firstName: String
  lastName: String
  directedFilms?: FilmCreateManyWithoutDirectorsInput
  writtenFilms?: FilmCreateManyWithoutWritersInput
  comments?: CommentCreateManyInput
}

export interface PersonUpdateWithoutDirectedFilmsDataInput {
  firstName?: String
  lastName?: String
  writtenFilms?: FilmUpdateManyWithoutWritersInput
  playedFilms?: FilmUpdateManyWithoutActorsInput
  comments?: CommentUpdateManyInput
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

export interface FilmUpdateManyWithoutWritersInput {
  create?: FilmCreateWithoutWritersInput[] | FilmCreateWithoutWritersInput
  connect?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
  disconnect?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
  delete?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
  update?: FilmUpdateWithWhereUniqueWithoutWritersInput[] | FilmUpdateWithWhereUniqueWithoutWritersInput
  upsert?: FilmUpsertWithWhereUniqueWithoutWritersInput[] | FilmUpsertWithWhereUniqueWithoutWritersInput
}

export interface FilmSubscriptionWhereInput {
  AND?: FilmSubscriptionWhereInput[] | FilmSubscriptionWhereInput
  OR?: FilmSubscriptionWhereInput[] | FilmSubscriptionWhereInput
  NOT?: FilmSubscriptionWhereInput[] | FilmSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FilmWhereInput
}

export interface FilmUpdateWithWhereUniqueWithoutWritersInput {
  where: FilmWhereUniqueInput
  data: FilmUpdateWithoutWritersDataInput
}

export interface PersonWhereUniqueInput {
  id?: ID_Input
}

export interface FilmUpdateWithoutWritersDataInput {
  title?: String
  year?: DateTime
  runtime?: DateTime
  plot?: String
  poster?: String
  rating?: Float
  votes?: Int
  genres?: GenreUpdateManyInput
  directors?: PersonUpdateManyWithoutDirectedFilmsInput
  actors?: PersonUpdateManyWithoutPlayedFilmsInput
  comments?: CommentUpdateManyWithoutFilmInput
}

export interface CommentUpdateInput {
  text?: String
  user?: UserUpdateOneInput
  film?: FilmUpdateOneWithoutCommentsInput
}

export interface PersonUpdateManyWithoutPlayedFilmsInput {
  create?: PersonCreateWithoutPlayedFilmsInput[] | PersonCreateWithoutPlayedFilmsInput
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
  disconnect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
  delete?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
  update?: PersonUpdateWithWhereUniqueWithoutPlayedFilmsInput[] | PersonUpdateWithWhereUniqueWithoutPlayedFilmsInput
  upsert?: PersonUpsertWithWhereUniqueWithoutPlayedFilmsInput[] | PersonUpsertWithWhereUniqueWithoutPlayedFilmsInput
}

export interface PersonUpsertWithWhereUniqueWithoutPlayedFilmsInput {
  where: PersonWhereUniqueInput
  update: PersonUpdateWithoutPlayedFilmsDataInput
  create: PersonCreateWithoutPlayedFilmsInput
}

export interface PersonUpdateWithWhereUniqueWithoutPlayedFilmsInput {
  where: PersonWhereUniqueInput
  data: PersonUpdateWithoutPlayedFilmsDataInput
}

export interface FilmUpsertWithoutCommentsInput {
  update: FilmUpdateWithoutCommentsDataInput
  create: FilmCreateWithoutCommentsInput
}

export interface PersonUpdateWithoutPlayedFilmsDataInput {
  firstName?: String
  lastName?: String
  directedFilms?: FilmUpdateManyWithoutDirectorsInput
  writtenFilms?: FilmUpdateManyWithoutWritersInput
  comments?: CommentUpdateManyInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface FilmUpdateManyWithoutDirectorsInput {
  create?: FilmCreateWithoutDirectorsInput[] | FilmCreateWithoutDirectorsInput
  connect?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
  disconnect?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
  delete?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
  update?: FilmUpdateWithWhereUniqueWithoutDirectorsInput[] | FilmUpdateWithWhereUniqueWithoutDirectorsInput
  upsert?: FilmUpsertWithWhereUniqueWithoutDirectorsInput[] | FilmUpsertWithWhereUniqueWithoutDirectorsInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface FilmUpdateWithWhereUniqueWithoutDirectorsInput {
  where: FilmWhereUniqueInput
  data: FilmUpdateWithoutDirectorsDataInput
}

export interface PersonCreateManyWithoutDirectedFilmsInput {
  create?: PersonCreateWithoutDirectedFilmsInput[] | PersonCreateWithoutDirectedFilmsInput
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
}

export interface FilmUpdateWithoutDirectorsDataInput {
  title?: String
  year?: DateTime
  runtime?: DateTime
  plot?: String
  poster?: String
  rating?: Float
  votes?: Int
  genres?: GenreUpdateManyInput
  writers?: PersonUpdateManyWithoutWrittenFilmsInput
  actors?: PersonUpdateManyWithoutPlayedFilmsInput
  comments?: CommentUpdateManyWithoutFilmInput
}

export interface PersonCreateManyWithoutPlayedFilmsInput {
  create?: PersonCreateWithoutPlayedFilmsInput[] | PersonCreateWithoutPlayedFilmsInput
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
}

export interface PersonUpdateManyWithoutWrittenFilmsInput {
  create?: PersonCreateWithoutWrittenFilmsInput[] | PersonCreateWithoutWrittenFilmsInput
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
  disconnect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
  delete?: PersonWhereUniqueInput[] | PersonWhereUniqueInput
  update?: PersonUpdateWithWhereUniqueWithoutWrittenFilmsInput[] | PersonUpdateWithWhereUniqueWithoutWrittenFilmsInput
  upsert?: PersonUpsertWithWhereUniqueWithoutWrittenFilmsInput[] | PersonUpsertWithWhereUniqueWithoutWrittenFilmsInput
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommentWhereInput
}

export interface PersonUpdateWithWhereUniqueWithoutWrittenFilmsInput {
  where: PersonWhereUniqueInput
  data: PersonUpdateWithoutWrittenFilmsDataInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface PersonUpdateWithoutWrittenFilmsDataInput {
  firstName?: String
  lastName?: String
  directedFilms?: FilmUpdateManyWithoutDirectorsInput
  playedFilms?: FilmUpdateManyWithoutActorsInput
  comments?: CommentUpdateManyInput
}

export interface PersonUpsertWithWhereUniqueWithoutWrittenFilmsInput {
  where: PersonWhereUniqueInput
  update: PersonUpdateWithoutWrittenFilmsDataInput
  create: PersonCreateWithoutWrittenFilmsInput
}

export interface FilmUpdateManyWithoutActorsInput {
  create?: FilmCreateWithoutActorsInput[] | FilmCreateWithoutActorsInput
  connect?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
  disconnect?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
  delete?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
  update?: FilmUpdateWithWhereUniqueWithoutActorsInput[] | FilmUpdateWithWhereUniqueWithoutActorsInput
  upsert?: FilmUpsertWithWhereUniqueWithoutActorsInput[] | FilmUpsertWithWhereUniqueWithoutActorsInput
}

export interface FilmUpsertWithWhereUniqueWithoutActorsInput {
  where: FilmWhereUniqueInput
  update: FilmUpdateWithoutActorsDataInput
  create: FilmCreateWithoutActorsInput
}

export interface FilmCreateManyWithoutWritersInput {
  create?: FilmCreateWithoutWritersInput[] | FilmCreateWithoutWritersInput
  connect?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
}

export interface CommentUpdateWithWhereUniqueWithoutFilmInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateWithoutFilmDataInput
}

export interface CommentUpdateManyWithoutFilmInput {
  create?: CommentCreateWithoutFilmInput[] | CommentCreateWithoutFilmInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueWithoutFilmInput[] | CommentUpdateWithWhereUniqueWithoutFilmInput
  upsert?: CommentUpsertWithWhereUniqueWithoutFilmInput[] | CommentUpsertWithWhereUniqueWithoutFilmInput
}

export interface FilmUpdateWithoutActorsDataInput {
  title?: String
  year?: DateTime
  runtime?: DateTime
  plot?: String
  poster?: String
  rating?: Float
  votes?: Int
  genres?: GenreUpdateManyInput
  directors?: PersonUpdateManyWithoutDirectedFilmsInput
  writers?: PersonUpdateManyWithoutWrittenFilmsInput
  comments?: CommentUpdateManyWithoutFilmInput
}

export interface FilmUpdateWithWhereUniqueWithoutActorsInput {
  where: FilmWhereUniqueInput
  data: FilmUpdateWithoutActorsDataInput
}

export interface FilmCreateManyWithoutDirectorsInput {
  create?: FilmCreateWithoutDirectorsInput[] | FilmCreateWithoutDirectorsInput
  connect?: FilmWhereUniqueInput[] | FilmWhereUniqueInput
}

export interface GenreCreateManyInput {
  create?: GenreCreateInput[] | GenreCreateInput
  connect?: GenreWhereUniqueInput[] | GenreWhereUniqueInput
}

export interface FilmUpdateOneWithoutCommentsInput {
  create?: FilmCreateWithoutCommentsInput
  connect?: FilmWhereUniqueInput
  delete?: Boolean
  update?: FilmUpdateWithoutCommentsDataInput
  upsert?: FilmUpsertWithoutCommentsInput
}

export interface PersonUpsertWithWhereUniqueWithoutDirectedFilmsInput {
  where: PersonWhereUniqueInput
  update: PersonUpdateWithoutDirectedFilmsDataInput
  create: PersonCreateWithoutDirectedFilmsInput
}

export interface UserUpdateInput {
  name?: String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface GenrePreviousValues {
  id: ID_Output
  genre: String
}

export interface Film extends Node {
  id: ID_Output
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
  genres?: Genre[]
  directors?: Person[]
  writers?: Person[]
  actors?: Person[]
  comments?: Comment[]
}

export interface User extends Node {
  id: ID_Output
  name: String
}

export interface AggregateGenre {
  count: Int
}

export interface BatchPayload {
  count: Long
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

export interface CommentPreviousValues {
  id: ID_Output
  text: String
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface Comment extends Node {
  id: ID_Output
  user: User
  film: Film
  text: String
}

export interface AggregatePerson {
  count: Int
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface PersonConnection {
  pageInfo: PageInfo
  edges: PersonEdge[]
  aggregate: AggregatePerson
}

export interface FilmSubscriptionPayload {
  mutation: MutationType
  node?: Film
  updatedFields?: String[]
  previousValues?: FilmPreviousValues
}

/*
 * An edge in a connection.

 */
export interface FilmEdge {
  node: Film
  cursor: String
}

export interface FilmPreviousValues {
  id: ID_Output
  title: String
  year: DateTime
  runtime: DateTime
  plot: String
  poster: String
  rating: Float
  votes: Int
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

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface Genre extends Node {
  id: ID_Output
  genre: String
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

export interface Person extends Node {
  id: ID_Output
  firstName: String
  lastName: String
  directedFilms?: Film[]
  writtenFilms?: Film[]
  playedFilms?: Film[]
  comments?: Comment[]
}

export interface PersonPreviousValues {
  id: ID_Output
  firstName: String
  lastName: String
}

export interface PersonSubscriptionPayload {
  mutation: MutationType
  node?: Person
  updatedFields?: String[]
  previousValues?: PersonPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PersonEdge {
  node: Person
  cursor: String
}

export interface AggregateComment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface FilmConnection {
  pageInfo: PageInfo
  edges: FilmEdge[]
  aggregate: AggregateFilm
}

export interface GenreSubscriptionPayload {
  mutation: MutationType
  node?: Genre
  updatedFields?: String[]
  previousValues?: GenrePreviousValues
}

export interface AggregateFilm {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number