const researchResults = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/research-results/research-results.js"),
      path.join(__dirname, "/source/assets/stylesheets/research-results/research-results.scss"),
    ]
  },

  output: {
    filename: "research-results.js",
    path: path.join(__dirname, 'build/research-results/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "research-results-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "research-results-manifest.json"
    })
  ]
};
