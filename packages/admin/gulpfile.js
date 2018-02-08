var gulp      = require('gulp'),
    debug     = require('gulp-debug'),
    karma     = require('gulp-karma-runner'),
    mocha     = require('gulp-mocha'),
    noop      = require('noop-fn'),
    plumber   = require('gulp-plumber');

gulp.task('test', [], function() {
    gulp.src('src/test/**/*.spec.js', {read: false})
        .pipe(plumber(noop))
        .pipe(karma.server({
            frameworks: ['mocha'],
            files: [
                'src/test/javascript/**/*.spec.js'
            ],
            reporters: ['progress'],
            port: 9876,
            colors: true,
            autoWatch: true,
            browsers: ['Chrome'],
            singleRun: false
        }));
});