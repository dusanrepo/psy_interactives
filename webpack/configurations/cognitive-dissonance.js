const cognitiveDissonance = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/cognitive-dissonance/cognitive-dissonance.js"),
      path.join(__dirname, "/source/assets/stylesheets/cognitive-dissonance/cognitive-dissonance.scss"),
    ]
  },

  output: {
    filename: "cognitive-dissonance.js",
    path: path.join(__dirname, 'build/cognitive-dissonance/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "cognitive-dissonance-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "cognitive-dissonance-manifest.json"
    })
  ]
};
