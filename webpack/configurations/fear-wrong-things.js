const fearWrongThings = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/fear-wrong-things/fear-wrong-things.js"),
      path.join(__dirname, "/source/assets/stylesheets/fear-wrong-things/fear-wrong-things.scss"),
    ]
  },

  output: {
    filename: "fear-wrong-things.js",
    path: path.join(__dirname, 'build/fear-wrong-things/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "fear-wrong-things-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "fear-wrong-things-manifest.json"
    })
  ]
};
