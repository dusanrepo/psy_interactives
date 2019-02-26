const facialSymmetry = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/facial-symmetry/facial-symmetry.js"),
      path.join(__dirname, "/source/assets/stylesheets/facial-symmetry/facial-symmetry.scss"),
    ]
  },

  output: {
    filename: "facial-symmetry.js",
    path: path.join(__dirname, 'build/facial-symmetry/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "facial-symmetry-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "facial-symmetry-manifest.json"
    })
  ]
};
