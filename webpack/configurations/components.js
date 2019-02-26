const components = {
  entry: {
    site: [
      path.join(__dirname, "source/assets/javascripts/components/components.js"),
      path.join(__dirname, "source/assets/stylesheets/components/components.scss"),
    ]
  },

  output: {
    filename: "components.js",
    path: path.join(__dirname, 'build/components/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "components-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "components-manifest.json"
    })
  ]
};
