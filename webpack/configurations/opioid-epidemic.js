const opioidEpidemic = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/opioid-epidemic/opioid-epidemic.js"),
      path.join(__dirname, "/source/assets/stylesheets/opioid-epidemic/opioid-epidemic.scss"),
    ]
  },

  output: {
    filename: "opioid-epidemic.js",
    path: path.join(__dirname, 'build/opioid-epidemic/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "opioid-epidemic-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "opioid-epidemic-manifest.json"
    })
  ]
};
