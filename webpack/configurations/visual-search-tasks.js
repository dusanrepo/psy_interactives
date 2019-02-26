const visualSearchTasks = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/visual-search-tasks/visual-search-tasks.js"),
      path.join(__dirname, "/source/assets/stylesheets/visual-search-tasks/visual-search-tasks.scss"),
    ]
  },

  output: {
    filename: "visual-search-tasks.js",
    path: path.join(__dirname, 'build/visual-search-tasks/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "visual-search-tasks-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "visual-search-tasks-manifest.json"
    })
  ]
};
