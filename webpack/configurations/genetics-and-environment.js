const geneticsAndEnvironment = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/genetics-and-environment/genetics-and-environment.js"),
      path.join(__dirname, "/source/assets/stylesheets/genetics-and-environment/genetics-and-environment.scss"),
    ]
  },

  output: {
    filename: "genetics-and-environment.js",
    path: path.join(__dirname, 'build/genetics-and-environment/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "genetics-and-environment-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "genetics-and-environment-manifest.json"
    })
  ]
};
