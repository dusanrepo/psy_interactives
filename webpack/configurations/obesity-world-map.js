const obesityWorldMap = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/obesity-world-map/obesity-world-map.js"),
      path.join(__dirname, "/source/assets/stylesheets/obesity-world-map/obesity-world-map.scss"),
    ]
  },

  output: {
    filename: "obesity-world-map.js",
    path: path.join(__dirname, 'build/obesity-world-map/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "obesity-world-map-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "obesity-world-map-manifest.json"
    })
  ]
};
