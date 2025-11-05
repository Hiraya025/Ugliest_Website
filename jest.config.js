// jest.config.js

module.exports = {
  testEnvironment: 'jsdom',  // Use jsdom to simulate browser environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  // Use the jest.setup.js file to mock IntersectionObserver
  transform: {
    '^.+\\.js$': 'babel-jest',  // Use babel-jest to transpile JavaScript files
  },
};
