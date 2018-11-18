const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/scripts/index.ts',
  mode: 'development',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          }
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['src'] },
      files: [
        'src/*'
      ]
    }),
    new Dotenv()
  ],
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};