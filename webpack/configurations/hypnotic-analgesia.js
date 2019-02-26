const hypnoticAnalgesia = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/hypnotic-analgesia/hypnotic-analgesia.js"),
      path.join(__dirname, "/source/assets/stylesheets/hypnotic-analgesia/hypnotic-analgesia.scss"),
    ]
  },

  output: {
    filename: "hypnotic-analgesia.js",
    path: path.join(__dirname, 'build/hypnotic-analgesia/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "hypnotic-analgesia-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "hypnotic-analgesia-manifest.json"
    })
  ]
};
