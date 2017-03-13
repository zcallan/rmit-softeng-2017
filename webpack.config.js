const path = require( 'path' );
const webpack = require( 'webpack' );


module.exports = {
  context: path.resolve( __dirname, './client' ),
  entry: path.resolve( __dirname, './client/views/Root.jsx' ),
  output: {
    path: path.resolve( __dirname, './build' ),
    filename: 'js/bundle.min.js',
  },
  devServer: {
    contentBase: path.resolve( __dirname, './build' ),
    inline: true,
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        use: 'babel-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      }
    ],

  },
  resolve: {
    alias: {
      views: path.resolve( __dirname, './client/views' ),
      config: path.resolve( __dirname, './client/config' ),
      styles: path.resolve( __dirname, './client/styles' ),
    },
    extensions: ['.js', '.jsx'],
  }
};
