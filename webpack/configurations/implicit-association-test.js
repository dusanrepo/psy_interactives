const implicitAssociationTest = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/implicit-association-test/implicit-association-test.js"),
      path.join(__dirname, "/source/assets/stylesheets/implicit-association-test/implicit-association-test.scss"),
    ]
  },

  output: {
    filename: "implicit-association-test.js",
    path: path.join(__dirname, 'build/implicit-association-test/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "implicit-association-test-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "implicit-association-test-manifest.json"
    })
  ]
};
