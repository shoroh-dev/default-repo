const gulp = require('gulp'),
    rigger = require('gulp-rigger'),
    htmlValidator = require('gulp-w3c-html-validator');

module.exports = riggerFunc = (cb) => {
    return gulp.src('src/pages/*.html')
        .pipe(rigger())
        .pipe(htmlValidator())
        .pipe(htmlValidator.reporter())
        .pipe(gulp.dest('build/'))
};