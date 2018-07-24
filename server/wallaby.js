module.exports = wallaby => ({
  files: [
    'src/**/*.ts',
    'src/**/*.graphql',
    'test/**/*.ts',
    '!test/**/*.test.ts',
    'data/**/*.ts',
    '!data/**/*.test.ts',
  ],
  tests: ['test/**/*.test.ts', 'data/**/*.test.ts'],
  env: {
    type: 'node',
    runner: 'node',
  },
  testFramework: 'jest',
});
