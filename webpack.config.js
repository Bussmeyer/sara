const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: PATHS.app,
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin([PATHS.build]),
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(PATHS.app, '/index.ejs')
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
   ],
  output: {
    filename: 'main.js',
    path: PATHS.build
  },
  module: {
     rules: [
       {
         test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
              }
            },
            "css-loader"
          ]
       },
       {
         test: /\.(svg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          sizes: [100, 500, 1200, 3000],
          placeholder: true,
          placeholderSize: 50
        }
      }
     ]
   }
};
