export default {
    clearMocks: true,
    coverageThreshold: {
      global: {
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70,
      },
    },
    globals: {
      __DEV__: true,
    },
    preset: 'react-native',
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    moduleNameMapper: {
      '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['./__tests__/setupTests.ts'],
    testPathIgnorePatterns: ['<rootDir>/__tests__/setupTests.ts'],
  };