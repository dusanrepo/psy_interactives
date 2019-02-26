const lipostatic = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/lipostatic/lipostatic.js"),
      path.join(__dirname, "source/assets/stylesheets/lipostatic/lipostatic.scss"),
    ]
  },

  output: {
    filename: "lipostatic.js",
    path: path.join(__dirname, 'build/lipostatic/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "lipostatic-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "lipostatic-manifest.json"
    })
  ]
};
