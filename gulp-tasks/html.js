module.exports = function(gulp) {
  return function() {
    return gulp.src('src/**/*.html')
      .pipe(gulp.dest('dist'));
  };
};
