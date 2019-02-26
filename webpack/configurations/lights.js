const lights = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/lights/lights.js"),
      path.join(__dirname, "source/assets/stylesheets/lights/lights.scss"),
    ]
  },

  output: {
    filename: "lights.js",
    path: path.join(__dirname, 'build/lights/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "lights-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "lights-manifest.json"
    })
  ]
};
