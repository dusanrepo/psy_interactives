const whatIsRule = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/what-is-rule/what-is-rule.js"),
      path.join(__dirname, "/source/assets/stylesheets/what-is-rule/what-is-rule.scss"),
    ]
  },

  output: {
    filename: "what-is-rule.js",
    path: path.join(__dirname, 'build/what-is-rule/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "what-is-rule-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "what-is-rule-manifest.json"
    })
  ]
};
