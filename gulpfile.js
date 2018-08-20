const gulp = require('gulp')
const ossSync = require('gulp-oss-sync')

const config = require('./config/index.js')

gulp.task('oss', () => gulp
    .src('dist/**/*')
    .pipe(ossSync(config))
)