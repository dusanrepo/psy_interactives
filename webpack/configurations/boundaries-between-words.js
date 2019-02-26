const boundariesBetweenWords = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/boundaries-between-words/boundaries-between-words.js"),
      path.join(__dirname, "/source/assets/stylesheets/boundaries-between-words/boundaries-between-words.scss"),
    ]
  },

  output: {
    filename: "boundaries-between-words.js",
    path: path.join(__dirname, 'build/boundaries-between-words/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "boundaries-between-words-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "boundaries-between-words-manifest.json"
    })
  ]
};
