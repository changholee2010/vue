const target = "http://192.168.0.18:3000";
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/api": {
        target,
        changeOrigin: true,
      },
      "^/update": {
        target,
        changeOrigin: true,
      },
      "^/download": {
        target,
        changeOrigin: true,
      },
      "^/uploads": {
        target,
        changeOrigin: true,
      },
    },
  },
};
// const { defineConfig } = require("@vue/cli-service");

// module.exports = defineConfig({
//   transpileDependencies: true,
// });
