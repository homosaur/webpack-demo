module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  entry: './src/entry.js',
  output: {
    filename: './dist/bundle.js'
  }
}
