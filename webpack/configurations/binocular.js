const binocular = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/binocular/binocular.js"),
      path.join(__dirname, "source/assets/stylesheets/binocular/binocular.scss"),
    ]
  },

  output: {
    filename: "binocular.js",
    path: path.join(__dirname, 'build/binocular/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "binocular-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "binocular-manifest.json"
    })
  ]
};
