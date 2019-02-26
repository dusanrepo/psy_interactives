const monocular = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/monocular/monocular.js"),
      path.join(__dirname, "source/assets/stylesheets/monocular/monocular.scss"),
    ]
  },

  output: {
    filename: "monocular.js",
    path: path.join(__dirname, 'build/monocular/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "monocular-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "monocular-manifest.json"
    })
  ]
};
