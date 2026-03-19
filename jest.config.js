export default {
  collectCoverage: true,
  collectCoverageFrom: ['lib/*.js'],
  coverageDirectory: '<rootDir>/.coverage',
  verbose: true,
  transform: {},
  moduleNameMapper: {
    "#ansi-styles": "<rootDir>/node_modules/chalk/source/vendor/ansi-styles/index.js",
    "#supports-color": "<rootDir>/node_modules/chalk/source/vendor/supports-color/index.js"
  },
};
