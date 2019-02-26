const brainConsciousness = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/brain-consciousness/brain-consciousness.js"),
      path.join(__dirname, "/source/assets/stylesheets/brain-consciousness/brain-consciousness.scss"),
    ]
  },

  output: {
    filename: "brain-consciousness.js",
    path: path.join(__dirname, 'build/brain-consciousness/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "brain-consciousness-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "brain-consciousness-manifest.json"
    })
  ]
};
