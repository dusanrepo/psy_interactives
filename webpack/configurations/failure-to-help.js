const failureToHelp = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/failure-to-help/failure-to-help.js"),
      path.join(__dirname, "/source/assets/stylesheets/failure-to-help/failure-to-help.scss"),
    ]
  },

  output: {
    filename: "failure-to-help.js",
    path: path.join(__dirname, 'build/failure-to-help/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "failure-to-help-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "failure-to-help-manifest.json"
    })
  ]
};
