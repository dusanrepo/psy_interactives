const cochlea = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/cochlea/cochlea.js"),
      path.join(__dirname, "source/assets/stylesheets/cochlea/cochlea.scss"),
    ]
  },

  output: {
    filename: "cochlea.js",
    path: path.join(__dirname, 'build/cochlea/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "cochlea-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "cochlea-manifest.json"
    })
  ]
};
