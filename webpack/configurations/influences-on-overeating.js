const influencesOnOvereating = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/influences-on-overeating/influences-on-overeating.js"),
      path.join(__dirname, "/source/assets/stylesheets/influences-on-overeating/influences-on-overeating.scss"),
    ]
  },

  output: {
    filename: "influences-on-overeating.js",
    path: path.join(__dirname, 'build/influences-on-overeating/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "influences-on-overeating-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "influences-on-overeating-manifest.json"
    })
  ]
};
