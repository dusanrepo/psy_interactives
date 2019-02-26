const nose = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/nose/nose.js"),
      path.join(__dirname, "source/assets/stylesheets/nose/nose.scss"),
    ]
  },

  output: {
    filename: "nose.js",
    path: path.join(__dirname, 'build/nose/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "nose-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "nose-manifest.json"
    })
  ]
};
