const dataCycle = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/data-cycle/data-cycle.js"),
      path.join(__dirname, "/source/assets/stylesheets/data-cycle/data-cycle.scss"),
    ]
  },

  output: {
    filename: "data-cycle.js",
    path: path.join(__dirname, 'build/data-cycle/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "data-cycle-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "data-cycle-manifest.json"
    })
  ]
};
