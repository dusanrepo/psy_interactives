const hearingDifferencePhenomes = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/hearing-difference-phenomes/hearing-difference-phenomes.js"),
      path.join(__dirname, "/source/assets/stylesheets/hearing-difference-phenomes/hearing-difference-phenomes.scss"),
    ]
  },

  output: {
    filename: "hearing-difference-phenomes.js",
    path: path.join(__dirname, 'build/hearing-difference-phenomes/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "hearing-difference-phenomes-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "hearing-difference-phenomes-manifest.json"
    })
  ]
};
