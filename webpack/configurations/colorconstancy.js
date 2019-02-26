const colorconstancy = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/colorconstancy/colorconstancy.js"),
      path.join(__dirname, "source/assets/stylesheets/colorconstancy/colorconstancy.scss"),
    ]
  },

  output: {
    filename: "colorconstancy.js",
    path: path.join(__dirname, 'build/colorconstancy/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "colorconstancy-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "colorconstancy-manifest.json"
    })
  ]
};
