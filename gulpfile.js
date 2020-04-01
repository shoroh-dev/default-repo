const gulp = require('gulp');

const rigger = require('./gulp/tasks/rigger'),
    serve = require('./gulp/tasks/serve'),
    styles = require('./gulp/tasks/styles'),
    clean = require('./gulp/tasks/clean'),
    script = require('./gulp/tasks/script'),
    image = require('./gulp/tasks/image'),
    lighthouse = require('./gulp/tasks/lighthouse'),
    favicon = require('./gulp/tasks/favicon'),
    fonts = require('./gulp/tasks/fonts');

const dev = gulp.parallel(rigger, styles, script, fonts, image, favicon);

const build = gulp.series(clean, dev);

module.exports.start = gulp.series(build, serve);
module.exports.build = build;

module.exports.lighthouse = gulp.series(lighthouse);