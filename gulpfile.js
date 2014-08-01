'use strict';

// dependencies
var gulp        = require('gulp');

var isProduction = false;

gulp.task('lint', function () {
  var jshint = require('gulp-jshint');
  return gulp.src('scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
});

// scripts task
gulp.task('scripts', ['lint'], function() {
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var b = browserify({
    basedir: '.',
    entries: './scripts/main/app.js',
    debug: !isProduction,
    insertGlobals: true
  });
  b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('build'))
});

gulp.task('default', ['scripts']);
