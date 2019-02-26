const threeCriteriaCausation = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/three-criteria-causation/three-criteria-causation.js"),
      path.join(__dirname, "/source/assets/stylesheets/three-criteria-causation/three-criteria-causation.scss"),
    ]
  },

  output: {
    filename: "three-criteria-causation.js",
    path: path.join(__dirname, 'build/three-criteria-causation/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "three-criteria-causation-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "three-criteria-causation-manifest.json"
    })
  ]
};
