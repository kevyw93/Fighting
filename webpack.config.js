const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    // ...
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
           'style-loader',
           'css-loader',
          ],
       },
       {
         test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg/, /\.eot/, /\.ttf/, /\.woff2?$/],
         loader: require.resolve('url-loader'),
         options: {
           limit: 10000,
           name: 'media/[name].[hash:8].[ext]'
         }
       },
    ]
  }
};
