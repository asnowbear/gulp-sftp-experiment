const gulp = require('gulp')
const ossSync = require('gulp-oss-sync')

// 获取 config 配置
const config = require('./config/index.js')

gulp.task('oss', () => gulp
    .src('dist/**/*')
    .pipe(ossSync(config))
)