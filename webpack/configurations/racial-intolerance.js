const racialIntolerance = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/racial-intolerance/racial-intolerance.js"),
      path.join(__dirname, "/source/assets/stylesheets/racial-intolerance/racial-intolerance.scss"),
    ]
  },

  output: {
    filename: "racial-intolerance.js",
    path: path.join(__dirname, 'build/racial-intolerance/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "racial-intolerance-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "racial-intolerance-manifest.json"
    })
  ]
};
