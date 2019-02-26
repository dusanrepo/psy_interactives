const genderDifferences = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/gender-differences/gender-differences.js"),
      path.join(__dirname, "/source/assets/stylesheets/gender-differences/gender-differences.scss"),
    ]
  },

  output: {
    filename: "gender-differences.js",
    path: path.join(__dirname, 'build/gender-differences/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "gender-differences-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "gender-differences-manifest.json"
    })
  ]
};
