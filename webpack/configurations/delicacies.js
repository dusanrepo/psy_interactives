const delicacies = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/delicacies/delicacies.js"),
      path.join(__dirname, "source/assets/stylesheets/delicacies/delicacies.scss"),
    ]
  },

  output: {
    filename: "delicacies.js",
    path: path.join(__dirname, 'build/delicacies/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "delicacies-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "delicacies-manifest.json"
    })
  ]
};
