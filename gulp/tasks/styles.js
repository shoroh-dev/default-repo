const gulp = require('gulp'),
    sass = require('gulp-sass'),
    gulpStylelint = require('gulp-stylelint'),
    plumber = require('gulp-plumber'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    shorthand = require('gulp-shorthand'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = styles = () => {
    return gulp.src('src/styles/*.scss')
        .pipe(plumber())
        .pipe(gulpStylelint({
            failAfterError: false,
            reporters: [
                {
                    formatter: 'string',
                    console: true
                }
            ]
        }))
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(shorthand())
        .pipe(cleanCSS({
            debug: true,
            compatibility: '*'
        }, details => {
            console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
        }))
        .pipe(gulp.dest('build/css'))
};