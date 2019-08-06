/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import Jarvis from 'webpack-jarvis';

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: '/dist',
    chunkFilename: '[name].js'
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 20000000,
    maxEntrypointSize: 8500000,
    assetFilter: assetFilename => {
      return (
        assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
      );
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    contentBase: '/dist',
    compress: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Jarvis({
      port: 1337
    })
  ]
};
