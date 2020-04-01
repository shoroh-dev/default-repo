const gulp = require('gulp');

module.exports = function fonts() {
    return gulp.src('src/favicon/**/*.*')
        .pipe(gulp.dest('build'))
};