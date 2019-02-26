"use strict";

const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require("webpack-manifest-plugin");
const outputPath = path.join(__dirname, "build/assets");

{{insert-webpack-interactive-plugins}}

const globalConfig = {
  entry: {
    vendor: [
      path.join(__dirname, "source/assets/javascripts/global.js")
    ]
  },

  output: {
    path: outputPath,
  },

  devServer: {
   stats: {
     colors: true,
     hash: false,
     version: false,
     timings: false,
     assets: false,
     chunks: false,
     modules: false,
     reasons: false,
     children: false,
     source: false,
     errors: false,
     errorDetails: false,
     warnings: false,
     publicPath: false
   }
 },

  resolve: {
    modules: [
      "node_modules"
    ]
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /(assets)/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|ico|jpg|jpeg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000,
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"],
              "plugins": ["transform-object-rest-spread"]
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: function () {
                return [
                  require("autoprefixer")
                ];
              }
            }
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                path.resolve(__dirname, "node_modules")
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([outputPath], {
      root: __dirname,
      verbose: false
    }){{insert-webpack-interactive-plugin-merges}}
  ]
};

{{insert-webpack-interactive-configurations}}

module.exports = [{{insert-webpack-configuration-merges}}];
