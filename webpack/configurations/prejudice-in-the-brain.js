const prejudiceInTheBrain = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/prejudice-in-the-brain/prejudice-in-the-brain.js"),
      path.join(__dirname, "/source/assets/stylesheets/prejudice-in-the-brain/prejudice-in-the-brain.scss"),
    ]
  },

  output: {
    filename: "prejudice-in-the-brain.js",
    path: path.join(__dirname, 'build/prejudice-in-the-brain/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "prejudice-in-the-brain-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "prejudice-in-the-brain-manifest.json"
    })
  ]
};
