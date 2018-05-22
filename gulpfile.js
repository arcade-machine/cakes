var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('source/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.reload({
      stream: true
  }))
});
gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('source/scss/styles.scss', ['sass']);
  gulp.watch('source/*.html', browserSync.reload);
  gulp.watch('source/js/*.js', browserSync.reload);
});
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'source'
    },
  });
});