import { FilmCreateInput } from '../../../../../generated/prisma';

const film: FilmCreateInput = {
  title: 'The Shawshank Redemption',
  year: '1994-01-01T00:00:00.000Z',
  runtime: '1970-01-01T02:22:00.000Z',
  plot:
    'Foo Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  poster:
    'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
  rating: 9.3,
  votes: 1078045,
};

export default film;
