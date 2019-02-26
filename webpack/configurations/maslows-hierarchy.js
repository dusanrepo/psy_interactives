const maslowsHierarchy = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/maslows-hierarchy/maslows-hierarchy.js"),
      path.join(__dirname, "/source/assets/stylesheets/maslows-hierarchy/maslows-hierarchy.scss"),
    ]
  },

  output: {
    filename: "maslows-hierarchy.js",
    path: path.join(__dirname, 'build/maslows-hierarchy/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "maslows-hierarchy-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "maslows-hierarchy-manifest.json"
    })
  ]
};
