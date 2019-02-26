const mcgurkEffect = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/mcgurk-effect/mcgurk-effect.js"),
      path.join(__dirname, "/source/assets/stylesheets/mcgurk-effect/mcgurk-effect.scss"),
    ]
  },

  output: {
    filename: "mcgurk-effect.js",
    path: path.join(__dirname, 'build/mcgurk-effect/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "mcgurk-effect-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "mcgurk-effect-manifest.json"
    })
  ]
};
