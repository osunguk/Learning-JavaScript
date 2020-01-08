const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('default', () => {
  gulp.src("es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("dest"))

  gulp.src("public/es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("public/dest"))
})