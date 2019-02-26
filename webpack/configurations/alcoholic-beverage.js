const alcoholicBeverage = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/alcoholic-beverage/alcoholic-beverage.js"),
      path.join(__dirname, "/source/assets/stylesheets/alcoholic-beverage/alcoholic-beverage.scss"),
    ]
  },

  output: {
    filename: "alcoholic-beverage.js",
    path: path.join(__dirname, 'build/alcoholic-beverage/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "alcoholic-beverage-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "alcoholic-beverage-manifest.json"
    })
  ]
};
