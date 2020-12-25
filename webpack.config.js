const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'index.js',
    library: 'nameOnCopy',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false,
    usedExports: true,
  },
}
