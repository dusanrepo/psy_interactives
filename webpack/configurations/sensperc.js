const sensperc = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/sensperc/sensperc.js"),
      path.join(__dirname, "source/assets/stylesheets/sensperc/sensperc.scss"),
    ]
  },

  output: {
    filename: "sensperc.js",
    path: path.join(__dirname, 'build/sensperc/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "sensperc-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "sensperc-manifest.json"
    })
  ]
};
