var elixir = require('laravel-elixir');
var gulp = require('gulp'),
  browserSync = require('browser-sync');


elixir(function (mix) {
    mix.sass('app.scss')
        .styles([
            "./node_modules/normalize.css/normalize.css",
            "./assets/css/app.css"
        ], 'assets/css/app.css')
        .browserify('app.js')
        .task('serve');
});


gulp.task('serve', function () {
    browserSync({
        server: './'
    });
    var files = ['css/**/*.css', 'js/**/*.js', '*.html'] 
    gulp.watch(files).on('change', browserSync.reload);
});