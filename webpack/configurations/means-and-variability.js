const meansAndVariability = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/means-and-variability/means-and-variability.js"),
      path.join(__dirname, "/source/assets/stylesheets/means-and-variability/means-and-variability.scss"),
    ]
  },

  output: {
    filename: "means-and-variability.js",
    path: path.join(__dirname, 'build/means-and-variability/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "means-and-variability-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "means-and-variability-manifest.json"
    })
  ]
};
