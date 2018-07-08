import { FilmCreateInput } from '../../../../generated/prisma';

const films: FilmCreateInput[] = [
  {
    title: 'The Shawshank Redemption',
    year: '1994-01-01T00:00:00.000Z',
    runtime: '1970-01-01T02:22:00.000Z',
    plot:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    poster:
      'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
    rating: 9.3,
    votes: 1078045,
  },
  {
    title: 'The Godfather',
    year: '1972-01-01T00:00:00.000Z',
    runtime: '1970-01-01T02:55:00.000Z',
    plot:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    poster:
      'http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX300.jpg',
    rating: 9.2,
    votes: 762332,
  },
  {
    title: 'The Godfather: Part II',
    year: '1974-01-01T00:00:00.000Z',
    runtime: '1970-01-01T03:20:00.000Z',
    plot:
      'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.',
    poster:
      'http://ia.media-imdb.com/images/M/MV5BNDc2NTM3MzU1Nl5BMl5BanBnXkFtZTcwMTA5Mzg3OA@@._V1_SX300.jpg',
    rating: 9,
    votes: 496772,
  },
  {
    title: 'Pulp Fiction',
    year: '1994-01-01T00:00:00.000Z',
    runtime: '1970-01-01T02:48:00.000Z',
    plot:
      "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster:
      'http://ia.media-imdb.com/images/M/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1_SX300.jpg',
    rating: 9,
    votes: 843376,
  },
  {
    title: 'The Good, the Bad and the Ugly',
    year: '1966-01-01T00:00:00.000Z',
    runtime: '1970-01-01T02:41:00.000Z',
    plot:
      'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
    poster:
      'http://ia.media-imdb.com/images/M/MV5BMjIxNjYwNDMzMl5BMl5BanBnXkFtZTcwODA5Mzg3OA@@._V1_SX300.jpg',
    rating: 9,
    votes: 325579,
  },
];

export default films;
