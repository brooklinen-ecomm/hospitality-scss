const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('src/*.scss')
          .pipe(sass())
          .pipe(gulp.dest('assets'))
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', gulp.series('sass'));
})