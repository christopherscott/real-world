import { MovieCreateInput } from '../../src/generated/prisma';

const films: MovieCreateInput[] = [
  {
    popularity: 246.395,
    releaseDate: '2018-06-06T00:00:00.000Z',
    poster: 'posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
    director: 'J.A. Bayona',
    overview:
      'Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
    actors: 'Chris Pratt, Bryce Dallas Howard, Rafe Spall, Justice Smith',
    title: 'Jurassic World: Fallen Kingdom',
    runtime: '1970-01-01T02:08:00.000Z',
  },
  {
    popularity: 186.229,
    releaseDate: '2018-07-04T00:00:00.000Z',
    poster: 'posters/rv1AWImgx386ULjcf62VYaW8zSt.jpg',
    director: 'Peyton Reed',
    overview:
      "As Scott Lang awaits expiration of his term of house detention, Hope van Dyne and Dr. Hank Pym involve him in a scheme to rescue Mrs. van Dyne from the micro-universe into which she has fallen, while two groups of schemers converge on them with intentions of stealing Dr. Pym's inventions.",
    actors: 'Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins',
    title: 'Ant-Man and the Wasp',
    runtime: '1970-01-01T01:58:00.000Z',
  },
  {
    popularity: 144.854,
    releaseDate: '2017-10-25T00:00:00.000Z',
    poster: 'posters/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    director: 'Taika Waititi',
    overview:
      'Thor is on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
    actors: 'Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Idris Elba',
    title: 'Thor: Ragnarok',
    runtime: '1970-01-01T02:10:00.000Z',
  },
  {
    popularity: 133.421,
    releaseDate: '2018-04-25T00:00:00.000Z',
    poster: 'posters/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    director: 'Anthony Russo, Joe Russo',
    overview:
      'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
    actors: 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans',
    title: 'Avengers: Infinity War',
    runtime: '1970-01-01T02:29:00.000Z',
  },
  {
    popularity: 130.91,
    releaseDate: '2018-07-25T00:00:00.000Z',
    poster: 'posters/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg',
    director: 'Christopher McQuarrie',
    overview:
      'When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
    actors: 'Tom Cruise, Rebecca Ferguson, Henry Cavill, Michelle Monaghan',
    title: 'Mission: Impossible - Fallout',
    runtime: '1970-01-01T02:27:00.000Z',
  },
];

export default films;
