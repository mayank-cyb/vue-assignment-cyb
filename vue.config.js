const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        //additionalData: `@import "@/styles/app.scss";`,
      },
      scss: {
        additionalData: `@import "@/styles/app.scss";`,
      },
      postcss: {
        // options here will be passed to postcss-loader
      },
    },
  },
});
