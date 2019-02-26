const violentVideogames = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/violent-videogames/violent-videogames.js"),
      path.join(__dirname, "/source/assets/stylesheets/violent-videogames/violent-videogames.scss"),
    ]
  },

  output: {
    filename: "violent-videogames.js",
    path: path.join(__dirname, 'build/violent-videogames/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "violent-videogames-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "violent-videogames-manifest.json"
    })
  ]
};
