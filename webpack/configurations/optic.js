const optic = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/optic/optic.js"),
      path.join(__dirname, "source/assets/stylesheets/optic/optic.scss"),
    ]
  },

  output: {
    filename: "optic.js",
    path: path.join(__dirname, 'build/optic/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "optic-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "optic-manifest.json"
    })
  ]
};
