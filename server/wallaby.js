module.exports = wallaby => ({
  files: ['src/**/*.ts', '!src/**/*.test.ts', 'src/**/*.graphql'],
  tests: ['src/**/*.test.ts'],
  env: {
    type: 'node',
    runner: 'node',
  },
  testFramework: 'jest',
});
