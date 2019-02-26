const sixGlasses = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/six-glasses/six-glasses.js"),
      path.join(__dirname, "/source/assets/stylesheets/six-glasses/six-glasses.scss"),
    ]
  },

  output: {
    filename: "six-glasses.js",
    path: path.join(__dirname, 'build/six-glasses/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "six-glasses-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "six-glasses-manifest.json"
    })
  ]
};
