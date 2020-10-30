module.exports = {
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/404.html" }]
    }
  },
  outputDir: "docs",
  configureWebpack: {
    devtool: "source-map"
  }
};
