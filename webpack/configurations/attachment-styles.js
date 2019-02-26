const attachmentStyles = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/attachment-styles/attachment-styles.js"),
      path.join(__dirname, "/source/assets/stylesheets/attachment-styles/attachment-styles.scss"),
    ]
  },

  output: {
    filename: "attachment-styles.js",
    path: path.join(__dirname, 'build/attachment-styles/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "attachment-styles-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "attachment-styles-manifest.json"
    })
  ]
};
