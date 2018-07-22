const {
  NODE_ENV,
  PRISMA_ENDPOINT,
  PRISMA_TEST_ENDPOINT,
  PRISMA_SECRET,
  APP_SECRET,
  TMDB_KEY,
  OMDB_KEY,
} = process.env;

const isTest = NODE_ENV === 'test';

export default {
  PRISMA_ENDPOINT: isTest ? 'http://prisma.com' : PRISMA_ENDPOINT,
  PRISMA_TEST_ENDPOINT: isTest ? 'http://prisma.com' : PRISMA_TEST_ENDPOINT,
  PRISMA_SECRET: isTest ? '123' : PRISMA_SECRET,
  APP_SECRET: isTest ? '123' : APP_SECRET,
  TMDB_KEY: isTest ? '123' : TMDB_KEY,
  OMDB_KEY: isTest ? '123' : OMDB_KEY,
};
