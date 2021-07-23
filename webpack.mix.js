let mix = require('laravel-mix');

mix
    .js('src/js/*.js', 'build/js')
    
    .postCss('src/css/app.css', 'build/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])

    .copy('src/index.html', 'build')

    .setPublicPath('build') // manifest shouldn't pollute source tree
    .sourceMaps()
;