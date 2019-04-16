module.exports = {
    publicPath: '/my-vuejs/',
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                data: `@import "~@/styles/styles.scss";`
            },
        }
    }
}