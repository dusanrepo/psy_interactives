const additiveColor = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/additive-color/additive-color.js"),
      path.join(__dirname, "source/assets/stylesheets/additive-color/additive-color.scss"),
    ]
  },

  output: {
    filename: "additive-color.js",
    path: path.join(__dirname, 'build/additive-color/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "additive-color-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "additive-color-manifest.json"
    })
  ]
};
