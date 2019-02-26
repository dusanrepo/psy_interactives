const jndcolor = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/jndcolor/jndcolor.js"),
      path.join(__dirname, "source/assets/stylesheets/jndcolor/jndcolor.scss"),
    ]
  },

  output: {
    filename: "jndcolor.js",
    path: path.join(__dirname, 'build/jndcolor/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "jndcolor-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "jndcolor-manifest.json"
    })
  ]
};
