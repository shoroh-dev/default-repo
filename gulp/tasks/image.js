const gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

module.exports = image = () => {
    return gulp.src('src/images/**/*.{gif,png,jpg,svg}')
        .pipe(imagemin([
            imagemin.mozjpeg({
                quality: 75,
                progressive: true
            }),
            imagemin.optipng({ optimizationLevel: 5 })
        ]))
        .pipe(gulp.dest('build/img'))
};