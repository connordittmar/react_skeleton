const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    //path: path.resolve('C:/users/m181524/projects/central_server/console/static/console') //this is for specific destination
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader" },
      { test: /\.(png|svg|jpg|gif)$/,
      use: [
          'file-loader'
      ]}
        ]
  }
};
