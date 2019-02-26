const wave = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/wave/wave.js"),
      path.join(__dirname, "source/assets/stylesheets/wave/wave.scss"),
    ]
  },

  output: {
    filename: "wave.js",
    path: path.join(__dirname, 'build/wave/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "wave-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "wave-manifest.json"
    })
  ]
};
