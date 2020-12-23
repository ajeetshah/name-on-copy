const path = require('path')

module.exports = ['source-map'].map((devtool) => ({
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
  },
  devtool,
  optimization: {
    runtimeChunk: true,
  },
}))
