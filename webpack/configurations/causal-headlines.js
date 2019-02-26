const causalHeadlines = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/causal-headlines/causal-headlines.js"),
      path.join(__dirname, "/source/assets/stylesheets/causal-headlines/causal-headlines.scss"),
    ]
  },

  output: {
    filename: "causal-headlines.js",
    path: path.join(__dirname, 'build/causal-headlines/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "causal-headlines-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "causal-headlines-manifest.json"
    })
  ]
};
