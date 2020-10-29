module.exports = {
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/404.html" }]
    }
  },
  outputDir: "docs",
  configureWebpack: {
    devtool: "source-map"
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        addTitle: true,
        addAttributes: {
          role: "presentation",
          "aria-labelledby": "title"
        },
        svgo: false
      });
  }
};
