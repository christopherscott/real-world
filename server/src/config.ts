export const PRISMA_ENDPOINT =
  process.env.NODE_ENV === 'test'
    ? 'http://localhost:4467'
    : process.env.PRISMA_ENDPOINT;

export const PRISMA_SECRET = process.env.PRISMA_SECRET;
