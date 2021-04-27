// @ts-check jest supports a .ts file, but that would require
// installing ts-node unnecessarily
// https://jestjs.io/docs/en/configuration.html

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
};

// eslint-disable-next-line import/no-default-export
export default config;
