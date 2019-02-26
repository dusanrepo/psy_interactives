const brainDev = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/brain-dev/brain-dev.js"),
      path.join(__dirname, "source/assets/stylesheets/brain-dev/brain-dev.scss"),
    ]
  },

  output: {
    filename: "brain-dev.js",
    path: path.join(__dirname, 'build/brain-dev/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "brain-dev-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "brain-dev-manifest.json"
    })
  ]
};
