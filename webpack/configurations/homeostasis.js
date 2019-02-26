const homeostasis = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/homeostasis/homeostasis.js"),
      path.join(__dirname, "source/assets/stylesheets/homeostasis/homeostasis.scss"),
    ]
  },

  output: {
    filename: "homeostasis.js",
    path: path.join(__dirname, 'build/homeostasis/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "homeostasis-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "homeostasis-manifest.json"
    })
  ]
};
