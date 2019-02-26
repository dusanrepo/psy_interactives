const ethicalPrinciples = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/ethical-principles/ethical-principles.js"),
      path.join(__dirname, "/source/assets/stylesheets/ethical-principles/ethical-principles.scss"),
    ]
  },

  output: {
    filename: "ethical-principles.js",
    path: path.join(__dirname, 'build/ethical-principles/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "ethical-principles-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "ethical-principles-manifest.json"
    })
  ]
};
