const dichoticListeningTask = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/dichotic-listening-task/dichotic-listening-task.js"),
      path.join(__dirname, "/source/assets/stylesheets/dichotic-listening-task/dichotic-listening-task.scss"),
    ]
  },

  output: {
    filename: "dichotic-listening-task.js",
    path: path.join(__dirname, 'build/dichotic-listening-task/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "dichotic-listening-task-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "dichotic-listening-task-manifest.json"
    })
  ]
};
