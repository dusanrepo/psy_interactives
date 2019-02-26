const alcohol = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/alcohol/alcohol.js"),
      path.join(__dirname, "/source/assets/stylesheets/alcohol/alcohol.scss"),
    ]
  },

  output: {
    filename: "alcohol.js",
    path: path.join(__dirname, 'build/alcohol/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "alcohol-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "alcohol-manifest.json"
    })
  ]
};
