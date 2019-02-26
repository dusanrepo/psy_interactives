const chooseTheBestPlan = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/javascripts/choose-the-best-plan/choose-the-best-plan.js"),
      path.join(__dirname, "/source/assets/stylesheets/choose-the-best-plan/choose-the-best-plan.scss"),
    ]
  },

  output: {
    filename: "choose-the-best-plan.js",
    path: path.join(__dirname, 'build/choose-the-best-plan/'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "choose-the-best-plan-vendor.js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "choose-the-best-plan-manifest.json"
    })
  ]
};
