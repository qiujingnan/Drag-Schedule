let prodPlugins = [];
if (process.env.NODE_ENV === "production") {
  // 生产环境去除console log
  prodPlugins.push("transform-remove-console");
}
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [...prodPlugins],
};
