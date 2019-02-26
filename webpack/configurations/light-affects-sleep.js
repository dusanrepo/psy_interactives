const lightAffectsSleep = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/light-affects-sleep/light-affects-sleep.js"),
      path.join(__dirname, "/source/assets/stylesheets/light-affects-sleep/light-affects-sleep.scss"),
    ]
  },

  output: {
    filename: "light-affects-sleep.js",
    path: path.join(__dirname, 'build/light-affects-sleep/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "light-affects-sleep-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "light-affects-sleep-manifest.json"
    })
  ]
};
