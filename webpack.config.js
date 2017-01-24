const devMode = process.env.NODE_ENV === 'development';

const config = {
  entry: {
    app: './src/App.js',
  },
  output: {
    path: 'dist/assets',
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    ],
  },
  devServer: {
    contentBase: 'dist',
    inline: true,
    port: '3001',
    publicPath: '/assets',
  },
  devtool: devMode ? 'eval-source-map' : null,
};

module.exports = config;