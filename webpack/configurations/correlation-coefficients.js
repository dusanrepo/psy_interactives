const correlationCoefficients = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/correlation-coefficients/correlation-coefficients.js"),
      path.join(__dirname, "/source/assets/stylesheets/correlation-coefficients/correlation-coefficients.scss"),
    ]
  },

  output: {
    filename: "correlation-coefficients.js",
    path: path.join(__dirname, 'build/correlation-coefficients/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "correlation-coefficients-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "correlation-coefficients-manifest.json"
    })
  ]
};
