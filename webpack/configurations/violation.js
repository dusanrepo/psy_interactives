const violation = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/violation/violation.js"),
      path.join(__dirname, "source/assets/stylesheets/violation/violation.scss"),
    ]
  },

  output: {
    filename: "violation.js",
    path: path.join(__dirname, 'build/violation/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "violation-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "violation-manifest.json"
    })
  ]
};
