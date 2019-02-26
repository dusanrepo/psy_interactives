const ponzo = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/ponzo/ponzo.js"),
      path.join(__dirname, "source/assets/stylesheets/ponzo/ponzo.scss"),
    ]
  },

  output: {
    filename: "ponzo.js",
    path: path.join(__dirname, 'build/ponzo/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "ponzo-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "ponzo-manifest.json"
    })
  ]
};
