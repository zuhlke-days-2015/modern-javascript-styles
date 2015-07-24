var fonts = [
  './node_modules/bootstrap/dist/fonts/*',
  './node_modules/font-awesome/fonts/*'
];

module.exports = function(gulp) {
  return function() {
    fonts.forEach(function(src) {
      gulp.src(src).pipe(gulp.dest('dist/fonts'));
    });
  }
};
