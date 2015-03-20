'use strict';

// dependencies
var gulp         = require('gulp');
var jshint       = require('gulp-jshint');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');

var isProduction = false;

var paths = {
  scriptEntryFiles: ['./scripts/app.js'],
  scriptSrcFiles:   './scripts/**/*.js',
  scriptDstDir:     './build'
};

gulp.task('lint', function () {
  return gulp.src(paths.scriptSrcFiles)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
});

// scripts task
gulp.task('scripts', ['lint'], function() {
  var b = browserify({
    entries: paths.scriptEntryFiles,
    debug: !isProduction,
  });

  b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.scriptDstDir))
});

gulp.task('watch', function() {
    gulp.watch(paths.scriptSrcFiles, ['scripts']);
});

gulp.task('default', ['scripts']);
