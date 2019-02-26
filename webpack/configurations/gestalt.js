const gestalt = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/gestalt/gestalt.js"),
      path.join(__dirname, "source/assets/stylesheets/gestalt/gestalt.scss"),
    ]
  },

  output: {
    filename: "gestalt.js",
    path: path.join(__dirname, 'build/gestalt/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "gestalt-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "gestalt-manifest.json"
    })
  ]
};
