const dolls = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/dolls/dolls.js"),
      path.join(__dirname, "source/assets/stylesheets/dolls/dolls.scss"),
    ]
  },

  output: {
    filename: "dolls.js",
    path: path.join(__dirname, 'build/dolls/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "dolls-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "dolls-manifest.json"
    })
  ]
};
