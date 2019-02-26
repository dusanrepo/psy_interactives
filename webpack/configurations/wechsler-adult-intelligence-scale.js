const wechslerAdultIntelligenceScale = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/wechsler-adult-intelligence-scale/wechsler-adult-intelligence-scale.js"),
      path.join(__dirname, "/source/assets/stylesheets/wechsler-adult-intelligence-scale/wechsler-adult-intelligence-scale.scss"),
    ]
  },

  output: {
    filename: "wechsler-adult-intelligence-scale.js",
    path: path.join(__dirname, 'build/wechsler-adult-intelligence-scale/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "wechsler-adult-intelligence-scale-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "wechsler-adult-intelligence-scale-manifest.json"
    })
  ]
};
