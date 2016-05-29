var path = require('path');
var webpack = require('webpack');

// babel-preset-2015 https://www.npmjs.com/package/babel-preset-es2015
// babel-preset-react https://www.npmjs.com/package/babel-preset-react
// babel-plugin-transform-class-properties https://www.npmjs.com/package/babel-plugin-transform-class-properties


module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react', 'es2015'],
            plugins: ['transform-class-properties']
          }
        }
      ]
    }
};
