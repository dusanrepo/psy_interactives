const differencesPersuasion = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/differences-persuasion/differences-persuasion.js"),
      path.join(__dirname, "/source/assets/stylesheets/differences-persuasion/differences-persuasion.scss"),
    ]
  },

  output: {
    filename: "differences-persuasion.js",
    path: path.join(__dirname, 'build/differences-persuasion/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "differences-persuasion-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "differences-persuasion-manifest.json"
    })
  ]
};
