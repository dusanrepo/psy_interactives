const humanCycle = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/human-cycle/human-cycle.js"),
      path.join(__dirname, "/source/assets/stylesheets/human-cycle/human-cycle.scss"),
    ]
  },

  output: {
    filename: "human-cycle.js",
    path: path.join(__dirname, 'build/human-cycle/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "human-cycle-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "human-cycle-manifest.json"
    })
  ]
};
