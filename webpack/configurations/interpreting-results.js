const interpretingResults = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/interpreting-results/interpreting-results.js"),
      path.join(__dirname, "/source/assets/stylesheets/interpreting-results/interpreting-results.scss"),
    ]
  },

  output: {
    filename: "interpreting-results.js",
    path: path.join(__dirname, 'build/interpreting-results/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "interpreting-results-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "interpreting-results-manifest.json"
    })
  ]
};
