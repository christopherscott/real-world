module.exports = wallaby => ({
  files: [
    'src/**/*.ts',
    '!src/**/*.test.ts',
    'src/**/*.graphql',
    'data/**/*.ts',
    '!data/**/*.test.ts',
  ],
  tests: ['src/**/*.test.ts', 'data/**/*.test.ts'],
  env: {
    type: 'node',
    runner: 'node',
  },
  testFramework: 'jest',
});
