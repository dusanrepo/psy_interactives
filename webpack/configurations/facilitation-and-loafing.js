const facilitationAndLoafing = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/facilitation-and-loafing/facilitation-and-loafing.js"),
      path.join(__dirname, "/source/assets/stylesheets/facilitation-and-loafing/facilitation-and-loafing.scss"),
    ]
  },

  output: {
    filename: "facilitation-and-loafing.js",
    path: path.join(__dirname, 'build/facilitation-and-loafing/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "facilitation-and-loafing-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "facilitation-and-loafing-manifest.json"
    })
  ]
};
