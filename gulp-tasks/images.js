var images = ['./src/img/*'];

module.exports = function(gulp) {
  return function() {
    images.forEach(function(src) {
      gulp.src(src).pipe(gulp.dest('./dist/img/'));
    });
  }
};
