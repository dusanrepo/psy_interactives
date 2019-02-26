const commonThread = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/common-thread/common-thread.js"),
      path.join(__dirname, "/source/assets/stylesheets/common-thread/common-thread.scss"),
    ]
  },

  output: {
    filename: "common-thread.js",
    path: path.join(__dirname, 'build/common-thread/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "common-thread-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "common-thread-manifest.json"
    })
  ]
};
