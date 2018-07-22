import { multiply } from 'ramda';

export const toISO = (date: string | number): string =>
  new Date(date).toISOString();

export const toMS = multiply(60000);
