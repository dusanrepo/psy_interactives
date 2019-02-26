const taste = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/taste/taste.js"),
      path.join(__dirname, "source/assets/stylesheets/taste/taste.scss"),
    ]
  },

  output: {
    filename: "taste.js",
    path: path.join(__dirname, 'build/taste/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "taste-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "taste-manifest.json"
    })
  ]
};
