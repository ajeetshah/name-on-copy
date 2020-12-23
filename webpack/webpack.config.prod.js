const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'name-on-copy.js',
    library: 'nameOnCopy',
    libraryTarget: 'umd',
  },
}
