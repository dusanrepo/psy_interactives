const problematicSleepHygiene = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/problematic-sleep-hygiene/problematic-sleep-hygiene.js"),
      path.join(__dirname, "/source/assets/stylesheets/problematic-sleep-hygiene/problematic-sleep-hygiene.scss"),
    ]
  },

  output: {
    filename: "problematic-sleep-hygiene.js",
    path: path.join(__dirname, 'build/problematic-sleep-hygiene/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "problematic-sleep-hygiene-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "problematic-sleep-hygiene-manifest.json"
    })
  ]
};
