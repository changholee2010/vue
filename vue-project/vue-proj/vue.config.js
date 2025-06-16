const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// prefetch off.
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }
}