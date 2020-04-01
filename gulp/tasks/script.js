const gulp = require('gulp'),
    babel = require('gulp-babel'),
    terser = require('gulp-terser'),
    concat = require("gulp-concat");

module.exports = script = () => {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(terser())
        .pipe(gulp.dest('build/js'))
};