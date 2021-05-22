module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/scss/_style.scss";
          `,
      },
    },
  },
};
