const waterfall = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/waterfall/waterfall.js"),
      path.join(__dirname, "source/assets/stylesheets/waterfall/waterfall.scss"),
    ]
  },

  output: {
    filename: "waterfall.js",
    path: path.join(__dirname, 'build/waterfall/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "waterfall-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "waterfall-manifest.json"
    })
  ]
};
