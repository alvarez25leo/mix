const mix = require('laravel-mix');

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

const pathFonts = 'public/fonts';

mix.copyDirectory('node_modules/@mdi/font/fonts', pathFonts);
mix.copyDirectory('node_modules/font-awesome/fonts', pathFonts);

mix.js('resources/vue/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css/vendor');

mix.styles([
    'public/css/vendor/app.css',
    'node_modules/animate.css/animate.min.css',
    'node_modules/font-awesome/css/font-awesome.css',
    'node_modules/@mdi/font/css/materialdesignicons.css',
    'resources/css/main.css'
], 'public/css/all.css');

mix.scripts([
    'resources/js/main.js',
], 'public/js/all.js');
