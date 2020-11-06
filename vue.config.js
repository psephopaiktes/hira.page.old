module.exports = {
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/404.html" }]
    }
  },
  configureWebpack: {
    devtool: "source-map"
  }
};
