const heuristics = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/heuristics/heuristics.js"),
      path.join(__dirname, "/source/assets/stylesheets/heuristics/heuristics.scss"),
    ]
  },

  output: {
    filename: "heuristics.js",
    path: path.join(__dirname, 'build/heuristics/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "heuristics-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "heuristics-manifest.json"
    })
  ]
};
