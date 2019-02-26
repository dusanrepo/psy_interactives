const perceptual = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/perceptual/perceptual.js"),
      path.join(__dirname, "source/assets/stylesheets/perceptual/perceptual.scss"),
    ]
  },

  output: {
    filename: "perceptual.js",
    path: path.join(__dirname, 'build/perceptual/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "perceptual-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "perceptual-manifest.json"
    })
  ]
};
