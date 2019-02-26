const peakDailyArousal = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/peak-daily-arousal/peak-daily-arousal.js"),
      path.join(__dirname, "/source/assets/stylesheets/peak-daily-arousal/peak-daily-arousal.scss"),
    ]
  },

  output: {
    filename: "peak-daily-arousal.js",
    path: path.join(__dirname, 'build/peak-daily-arousal/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "peak-daily-arousal-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "peak-daily-arousal-manifest.json"
    })
  ]
};
