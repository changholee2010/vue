const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
})

const target = 'http://127.0.0.1:3000'

// prefetch off.
module.exports = {
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
    },
    devServer: {
        port: 8000,
        proxy: {
            '^/api': {
                target,
                changeOrigin: true,
            },
        },
    },
}
