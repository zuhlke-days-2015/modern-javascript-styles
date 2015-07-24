var less = require('gulp-less');
var postcss = require('gulp-postcss');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('autoprefixer-core');

module.exports = function(gulp) {
  return function() {
    return gulp.src('src/css/style.less')
      .pipe(less({compress: true}))
      .pipe(postcss([autoprefixer({browsers: ['last 2 version']})]))
      .pipe(minifyCSS({keepBreaks: false}))
      .pipe(gulp.dest('dist/css'));
  };
};
