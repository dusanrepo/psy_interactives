const checkerboard = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/checkerboard/checkerboard.js"),
      path.join(__dirname, "source/assets/stylesheets/checkerboard/checkerboard.scss"),
    ]
  },

  output: {
    filename: "checkerboard.js",
    path: path.join(__dirname, 'build/checkerboard/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "checkerboard-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "checkerboard-manifest.json"
    })
  ]
};
