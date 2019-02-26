const waveaudio = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/waveaudio/waveaudio.js"),
      path.join(__dirname, "source/assets/stylesheets/waveaudio/waveaudio.scss"),
    ]
  },

  output: {
    filename: "waveaudio.js",
    path: path.join(__dirname, 'build/waveaudio/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "waveaudio-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "waveaudio-manifest.json"
    })
  ]
};
