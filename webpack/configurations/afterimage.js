const afterimage = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/afterimage/afterimage.js"),
      path.join(__dirname, "source/assets/stylesheets/afterimage/afterimage.scss"),
    ]
  },

  output: {
    filename: "afterimage.js",
    path: path.join(__dirname, 'build/afterimage/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "afterimage-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "afterimage-manifest.json"
    })
  ]
};
