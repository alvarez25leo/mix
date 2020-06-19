const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableNotifications()

const pathFonts = 'public/fonts';
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

mix.webpackConfig({
    plugins: [
        new SWPrecacheWebpackPlugin({
            cacheId: 'pwa',
            filename: 'public/service-worker.js',
            staticFileGlobs: ['public/**/*.{css,eot,svg,ttf,woff,woff2,js,html}'],
            minify: true,
            stripPrefix: 'public/',
            handleFetch: true,
            staticFileGlobsIgnorePatterns: [/\.map$/, /mix-manifest\.json$/, /manifest\.json$/, /service-worker\.js$/],
            navigateFallback: '/',
            runtimeCaching: [
                {
                    urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
                    handler: 'cacheFirst',
                },
            ],
        }),
        new MomentLocalesPlugin(),
        new MomentLocalesPlugin({
            localesToKeep: ['es'],
        }),
    ],
    node: {
        fs: 'empty',
    },
    externals: [
        {
            './cptable': 'var cptable',
        },
    ],
})

mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
})

mix.copyDirectory('node_modules/@mdi/font/fonts', pathFonts)
mix.copyDirectory('node_modules/font-awesome/fonts', pathFonts)

mix.js('resources/vue/app.js', 'public/js')
    .extract(['lodash', 'js-cookie', 'popper.js', 'jquery', 'bootstrap'], 'public/js/vendor.bundle.base.js')
    .extract(['moment', 'axios', 'vue', 'vuex'], 'public/js/vendor.bundle.addons.js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/vue/'),
            },
        },
    })
    .sourceMaps()

mix.sass('resources/sass/app.scss', 'public/css/vendor')

mix.styles(
    [
        'public/css/vendor/app.css',
	    'node_modules/animate.css/animate.min.css',
	    'node_modules/font-awesome/css/font-awesome.css',
	    'node_modules/@mdi/font/css/materialdesignicons.css',
	    'resources/css/main.css'
    ],
    'public/css/all.css'
)
    .sourceMaps()

mix.js(['resources/js/index.js'], 'public/js/all.js')
    .sourceMaps()
