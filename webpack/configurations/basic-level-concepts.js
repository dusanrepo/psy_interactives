const basicLevelConcepts = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/basic-level-concepts/basic-level-concepts.js"),
      path.join(__dirname, "/source/assets/stylesheets/basic-level-concepts/basic-level-concepts.scss"),
    ]
  },

  output: {
    filename: "basic-level-concepts.js",
    path: path.join(__dirname, 'build/basic-level-concepts/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "basic-level-concepts-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "basic-level-concepts-manifest.json"
    })
  ]
};
