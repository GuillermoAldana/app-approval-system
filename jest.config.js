// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // raíz del proyecto
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
