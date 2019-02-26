const {{interactive-const-name}} = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/{{interactive-dir-name}}/{{interactive-js-name}}.js"),
      path.join(__dirname, "/source/assets/stylesheets/{{interactive-dir-name}}/{{interactive-scss-name}}.scss"),
    ]
  },

  output: {
    filename: "{{interactive-yml-name}}.js",
    path: path.join(__dirname, 'build/{{interactive-yml-name}}/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "{{interactive-yml-name}}-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "{{interactive-yml-name}}-manifest.json"
    })
  ]
};
