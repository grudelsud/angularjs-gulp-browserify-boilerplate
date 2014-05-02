'use strict';

// dependencies
var gulp        = require('gulp');
var browserify  = require('gulp-browserify');

var isProduction = false;

// scripts task
gulp.task('scripts', function() {
  return gulp.src('scripts/main/app.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !isProduction
    }))
    .pipe(gulp.dest('build'))
});

gulp.task('default', ['scripts']);
