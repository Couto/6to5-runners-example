var gulp = require('gulp'),
    to5 = require('gulp-6to5'),
    browserify = require('gulp-browserify');

gulp.task('6to5', function () {
    return gulp.src('app/**/*.js')
        .pipe(to5({
            modules: 'common',
            runtime: true,
            experimental: true
        }))
        .pipe(gulp.dest('build/gulp'));
});

gulp.task('browserify', function () {
    return gulp.src('build/gulp/application.js')
        .pipe(browserify())
        .pipe(gulp.dest('build/gulp/bundle.js'));
});

gulp.task('default', ['6to5', 'browserify']);
