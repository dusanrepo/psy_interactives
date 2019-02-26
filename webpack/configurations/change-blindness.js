const changeBlindness = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/change-blindness/change-blindness.js"),
      path.join(__dirname, "/source/assets/stylesheets/change-blindness/change-blindness.scss"),
    ]
  },

  output: {
    filename: "change-blindness.js",
    path: path.join(__dirname, 'build/change-blindness/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "change-blindness-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "change-blindness-manifest.json"
    })
  ]
};
