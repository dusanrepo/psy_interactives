const transference = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/transference/transference.js"),
      path.join(__dirname, "/source/assets/stylesheets/transference/transference.scss"),
    ]
  },

  output: {
    filename: "transference.js",
    path: path.join(__dirname, 'build/transference/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "transference-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "transference-manifest.json"
    })
  ]
};
