'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('fonts', require('./gulp-tasks/fonts.js')(gulp));
gulp.task('images', require('./gulp-tasks/images.js')(gulp));
gulp.task('html', require('./gulp-tasks/html.js')(gulp));
gulp.task('less', require('./gulp-tasks/less.js')(gulp));
gulp.task('less-watch', ['less'], browserSync.reload);
gulp.task('html-watch', ['html'], browserSync.reload);
gulp.task('build-all', ['less', 'html', 'fonts', 'images']);
gulp.task('default', ['serve']);

gulp.task('serve', ['build-all'], function() {
  browserSync({
    server: 'dist',
    browser: "google chrome",
    notify: false,
    minify: false,
    open: false
  });
  gulp.watch(['./src/**/*.less'], ['less-watch']);
  gulp.watch(['./src/**/*.html'], ['html-watch']);
});
