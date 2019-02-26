const manipulatedMeasured = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/manipulated-measured/manipulated-measured.js"),
      path.join(__dirname, "/source/assets/stylesheets/manipulated-measured/manipulated-measured.scss"),
    ]
  },

  output: {
    filename: "manipulated-measured.js",
    path: path.join(__dirname, 'build/manipulated-measured/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "manipulated-measured-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "manipulated-measured-manifest.json"
    })
  ]
};
