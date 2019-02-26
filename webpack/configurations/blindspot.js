const blindspot = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/blindspot/blindspot.js"),
      path.join(__dirname, "source/assets/stylesheets/blindspot/blindspot.scss"),
    ]
  },

  output: {
    filename: "blindspot.js",
    path: path.join(__dirname, 'build/blindspot/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "blindspot-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "blindspot-manifest.json"
    })
  ]
};
