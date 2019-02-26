const natureOfIntelligence = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/nature-of-intelligence/nature-of-intelligence.js"),
      path.join(__dirname, "/source/assets/stylesheets/nature-of-intelligence/nature-of-intelligence.scss"),
    ]
  },

  output: {
    filename: "nature-of-intelligence.js",
    path: path.join(__dirname, 'build/nature-of-intelligence/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "nature-of-intelligence-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "nature-of-intelligence-manifest.json"
    })
  ]
};
