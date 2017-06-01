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
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  target: 'web',
  entry: './src/entry.js',
  output: {
    filename: './dist/bundle.js'
  }
}
