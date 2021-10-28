module.exports = {
  runtimeCompiler: true,
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "ru",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
  chainWebpack: config => {
    config.module
        .rule("fonts")
        .test(/\.(ttf|otf|eot|woff|woff2)$/)
        .use("file-loader")
        .loader("file-loader")
        .tap(options => {
          options = {
            // limit: 10000,
            name: '/assets/fonts/[name].[ext]',
          }
          return options
        })
        .end()
  }
};
