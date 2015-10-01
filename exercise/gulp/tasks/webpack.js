var gulp = require('gulp');
var config = require('../config').javascript;
var webpack = require('webpack-stream');

gulp.task('webpack', function(callback) {
  return gulp.src('./src/js/app.js')
  .pipe(webpack({
    output: {
      filename: 'packed.js'
    }
  }))
  .pipe(gulp.dest('./build/js/'));
});

