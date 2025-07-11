const target = "http://localhost:3000";

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/download": {
        target,
        changeOrigin: true,
      },
      "^/api": {
        target,
        changeOrigin: true,
      },
      "^/upload": {
        target,
        changeOrigin: true,
      },
    },
  },
};

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
