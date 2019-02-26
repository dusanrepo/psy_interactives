const wordsArtificialLanguage = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/words-artificial-language/words-artificial-language.js"),
      path.join(__dirname, "/source/assets/stylesheets/words-artificial-language/words-artificial-language.scss"),
    ]
  },

  output: {
    filename: "words-artificial-language.js",
    path: path.join(__dirname, 'build/words-artificial-language/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "words-artificial-language-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "words-artificial-language-manifest.json"
    })
  ]
};
