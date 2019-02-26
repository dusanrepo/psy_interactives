const face = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/face/face.js"),
      path.join(__dirname, "source/assets/stylesheets/face/face.scss"),
    ]
  },

  output: {
    filename: "face.js",
    path: path.join(__dirname, 'build/face/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "face-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "face-manifest.json"
    })
  ]
};
