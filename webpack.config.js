const webpack = require('webpack');
const dotenv = require('dotenv');
// call dotenv and it will return an Object with a parsed key 
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ['react-hot-loader/patch', './src'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 3000, // Convert images < 8kb to base64 strings
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin(envKeys),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    port: env.PORT,
    hotOnly: true,
    https: false,
  }
}
