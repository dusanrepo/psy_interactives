const randomSamplingAssignment = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/random-sampling-assignment/random-sampling-assignment.js"),
      path.join(__dirname, "/source/assets/stylesheets/random-sampling-assignment/random-sampling-assignment.scss"),
    ]
  },

  output: {
    filename: "random-sampling-assignment.js",
    path: path.join(__dirname, 'build/random-sampling-assignment/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "random-sampling-assignment-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "random-sampling-assignment-manifest.json"
    })
  ]
};
