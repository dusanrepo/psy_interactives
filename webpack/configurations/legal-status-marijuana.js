const legalStatusMarijuana = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/legal-status-marijuana/legal-status-marijuana.js"),
      path.join(__dirname, "/source/assets/stylesheets/legal-status-marijuana/legal-status-marijuana.scss"),
    ]
  },

  output: {
    filename: "legal-status-marijuana.js",
    path: path.join(__dirname, 'build/legal-status-marijuana/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "legal-status-marijuana-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "legal-status-marijuana-manifest.json"
    })
  ]
};
