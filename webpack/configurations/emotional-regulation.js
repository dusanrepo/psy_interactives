const emotionalRegulation = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/emotional-regulation/emotional-regulation.js"),
      path.join(__dirname, "source/assets/stylesheets/emotional-regulation/emotional-regulation.scss"),
    ]
  },

  output: {
    filename: "emotional-regulation.js",
    path: path.join(__dirname, 'build/emotional-regulation/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "emotional-regulation-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "emotional-regulation-manifest.json"
    })
  ]
};
