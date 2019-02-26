const receptors = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/receptors/receptors.js"),
      path.join(__dirname, "source/assets/stylesheets/receptors/receptors.scss"),
    ]
  },

  output: {
    filename: "receptors.js",
    path: path.join(__dirname, 'build/receptors/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "receptors-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "receptors-manifest.json"
    })
  ]
};
