import { FilmCreateInput } from '../../../../../generated/prisma';

const films: FilmCreateInput[] = [
  {
    title: 'The Shawshank Redemption',
    year: '1994-01-01T00:00:00.000Z',
    runtime: '1970-01-01T02:22:00.000Z',
    plot:
      'Foo Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
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
      'Baz The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    poster:
      'http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX300.jpg',
    rating: 9.2,
    votes: 762332,
  },
  {
    title: 'Test The Godfather: Part II',
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
    title: '12 Angry Men',
    year: '1957-01-01T00:00:00.000Z',
    runtime: '1970-01-01T01:36:00.000Z',
    plot:
      'A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.',
    poster:
      'http://ia.media-imdb.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg',
    rating: 8.9,
    votes: 266350,
  },
  {
    title: 'Fight Club',
    year: '1999-01-01T00:00:00.000Z',
    runtime: '1970-01-01T02:19:00.000Z',
    plot:
      'An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more...',
    poster:
      'http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX300.jpg',
    rating: 8.8,
    votes: 819812,
  },
];

export default films;
