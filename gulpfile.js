var gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    transform = require('vinyl-transform');

gulp.task('babel', function () {
    return gulp.src('app/**/*.js')
        .pipe(babel({
            modules: 'common',
            optional: ['runtime'],
            experimental: true
        }))
        .pipe(gulp.dest('build/gulp/'));
});

gulp.task('browserify', function () {
    // transform regular node stream to gulp (buffered vinyl) stream
    var browserified = transform(function (filename) {
        var b = browserify({ entries: filename, debug: true });
        return b.bundle();
    });

    return gulp.src('build/gulp/application.js')
        .pipe(browserified)
        .pipe(gulp.dest('build/gulp/bundle'));
});

gulp.task('default', ['babel', 'browserify']);
