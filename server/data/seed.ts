import data from './data';
import { map, prop, compose, flatten, uniq, split, forEach, pick } from 'ramda';
import { Prisma } from '../src/generated/prisma';

const db: Prisma = new Prisma({
  endpoint: 'http://localhost:4466',
  secret: 'mysecret123',
});

const name = compose(
  ([firstName = '', lastName = '']) => ({ firstName, lastName }),
  split(' ')
);

const genres = compose(
  uniq,
  flatten,
  map(prop('genres'))
)(data);

const directors = map(prop('directors'), data);

const writers = map(prop('writers'), data);

const actors = map(prop('actors'), data);

const people = compose(
  map(name),
  uniq,
  flatten
)([directors, writers, actors]);

const beforeSeed = async () => {
  await db.mutation.deleteManyGenres({});
  await db.mutation.deleteManyComments({});
  await db.mutation.deleteManyPersons({});
  await db.mutation.deleteManyFilms({});
};

(async () => {
  await beforeSeed();

  // Seed genres
  forEach(
    async genre => {
      await db.mutation.createGenre({ data: { genre } });
    },
    genres as string[]
  );

  // Seed people
  forEach(async person => {
    await db.mutation.createPerson({ data: person });
  }, people);

  // Seed films
  forEach(async ({ genres, directors, writers, actors, ...film }) => {
    const genreIds = await db.query.genres(
      {
        where: { OR: map(genre => ({ genre }), genres) },
      },
      '{ id }'
    );

    const directorIds = await db.query.persons(
      {
        where: { OR: map(name, directors) },
      },
      '{ id }'
    );

    const writerIds = await db.query.persons(
      {
        where: { OR: map(name, writers) },
      },
      '{ id }'
    );

    const actorIds = await db.query.persons(
      {
        where: { OR: map(name, actors) },
      },
      '{ id }'
    );

    await db.mutation.createFilm({
      data: {
        ...film,
        genres: { connect: genreIds },
        directors: { connect: directorIds },
        writers: { connect: writerIds },
        actors: { connect: actorIds },
      },
    });
  }, data);
})();
