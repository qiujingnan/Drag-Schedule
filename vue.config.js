const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const setting = require("./src/defaultSetting");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    port: "8888",
    // Proxy config
    // proxy: 'http://localhost:8083'
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    // delete prefetch ,default on
    config.plugins.delete("prefetch");
    // delete preload
    // config.plugins.delete('preload')
    // default title
    config.plugin("html").tap((args) => {
      args[0].title = setting.title;
      return args;
    });
    // svg icon config
    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
        lessOptions: {
          /** less-loader 配置 */
          strictMath: true,
          noIeCompat: true,
        },
      })
      .end();
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    plugins: [
      // gzip on 打包开启gzip压缩 需要服务器同步配置
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css$/, // file tyle
        threshold: 10 * 1024, // Compression above 10K
        deleteOriginalAssets: false, // delete origin file
      }),
    ],
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            hack: `true; @import "/src/styles/variables.less";`, // 全局less变量注入
          },
        },
      },
    },
  },
});
