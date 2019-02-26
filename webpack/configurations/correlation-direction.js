const correlationDirection = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/correlation-direction/correlation-direction.js"),
      path.join(__dirname, "/source/assets/stylesheets/correlation-direction/correlation-direction.scss"),
    ]
  },

  output: {
    filename: "correlation-direction.js",
    path: path.join(__dirname, 'build/correlation-direction/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "correlation-direction-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "correlation-direction-manifest.json"
    })
  ]
};
