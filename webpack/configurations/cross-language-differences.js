const crossLanguageDifferences = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/cross-language-differences/cross-language-differences.js"),
      path.join(__dirname, "/source/assets/stylesheets/cross-language-differences/cross-language-differences.scss"),
    ]
  },

  output: {
    filename: "cross-language-differences.js",
    path: path.join(__dirname, 'build/cross-language-differences/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "cross-language-differences-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "cross-language-differences-manifest.json"
    })
  ]
};
