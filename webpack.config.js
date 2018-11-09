const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['public'] },
          files: [
            'app/**/*',
            'public/**/*',
            'resources/views/**/*',
            'resources/lang/**/*',
            'routes/**/*'
        ]
        })
      ]
};