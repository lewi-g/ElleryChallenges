const path = require('path')

module.exports = {
  moduleDirectories: ['node_modules', path.join(__dirname, 'test')],
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 40
    }
  }
}
