const candleMountingProblem = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/candle-mounting-problem/candle-mounting-problem.js"),
      path.join(__dirname, "/source/assets/stylesheets/candle-mounting-problem/candle-mounting-problem.scss"),
    ]
  },

  output: {
    filename: "candle-mounting-problem.js",
    path: path.join(__dirname, 'build/candle-mounting-problem/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "candle-mounting-problem-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "candle-mounting-problem-manifest.json"
    })
  ]
};
