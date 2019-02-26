const threeStudies = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/three-studies/three-studies.js"),
      path.join(__dirname, "/source/assets/stylesheets/three-studies/three-studies.scss"),
    ]
  },

  output: {
    filename: "three-studies.js",
    path: path.join(__dirname, 'build/three-studies/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "three-studies-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "three-studies-manifest.json"
    })
  ]
};
