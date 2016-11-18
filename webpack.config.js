const path = require('path');

// entry point(s) for app
module.exports = {
  entry: [
    './app/index.js',
  ],
// transcompilers location
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
// output for bundled files
  output: {
    filename: 'index_bundle.js',
    path: path.join(__dirname, '/dist'),
  },

};
