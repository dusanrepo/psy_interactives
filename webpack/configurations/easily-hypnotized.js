const easilyHypnotized = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/easily-hypnotized/easily-hypnotized.js"),
      path.join(__dirname, "/source/assets/stylesheets/easily-hypnotized/easily-hypnotized.scss"),
    ]
  },

  output: {
    filename: "easily-hypnotized.js",
    path: path.join(__dirname, 'build/easily-hypnotized/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "easily-hypnotized-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "easily-hypnotized-manifest.json"
    })
  ]
};
