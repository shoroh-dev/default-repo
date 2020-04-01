const gulp = require('gulp');

const image = require('./image');
const styles = require('./styles');
const rigger = require('./rigger');
const script = require('./script');

const server = require('browser-sync').create();

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    });

    gulp.watch('src/images/**/*.{gif,png,jpg,svg}', gulp.series(image)).on('change', server.reload);
    gulp.watch('src/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)));
    gulp.watch('src/js/', gulp.series(script)).on('change', server.reload);
    gulp.watch('src/**/*.html', gulp.series(rigger)).on('change', server.reload);
    gulp.watch('build/*.html').on('change', server.reload);

    return cb();
};