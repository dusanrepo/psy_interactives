const bodymassindex = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/bodymassindex/bodymassindex.js"),
      path.join(__dirname, "/source/assets/stylesheets/bodymassindex/bodymassindex.scss"),
    ]
  },

  output: {
    filename: "bodymassindex.js",
    path: path.join(__dirname, 'build/bodymassindex/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "bodymassindex-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "bodymassindex-manifest.json"
    })
  ]
};
