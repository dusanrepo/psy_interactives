const meanMedianMode = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/mean-median-mode/mean-median-mode.js"),
      path.join(__dirname, "/source/assets/stylesheets/mean-median-mode/mean-median-mode.scss"),
    ]
  },

  output: {
    filename: "mean-median-mode.js",
    path: path.join(__dirname, 'build/mean-median-mode/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "mean-median-mode-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "mean-median-mode-manifest.json"
    })
  ]
};
