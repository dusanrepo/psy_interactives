const uncoveringImplicitBias = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/uncovering-implicit-bias/uncovering-implicit-bias.js"),
      path.join(__dirname, "/source/assets/stylesheets/uncovering-implicit-bias/uncovering-implicit-bias.scss"),
    ]
  },

  output: {
    filename: "uncovering-implicit-bias.js",
    path: path.join(__dirname, 'build/uncovering-implicit-bias/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "uncovering-implicit-bias-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "uncovering-implicit-bias-manifest.json"
    })
  ]
};
