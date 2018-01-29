var gulp = require("gulp");
var pug = require('gulp-pug');
var ts = require("gulp-typescript");

var tsProject = ts.createProject("tsconfig.json");

gulp.task('default', ['ts', 'public', 'views']);

gulp.task('ts', function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("./dist/"));
});

gulp.task('public', function () {
  return gulp.src('./src/public/**/*')
    .pipe(gulp.dest('./dist/public/'));
});

gulp.task('views', function () {
  return gulp.src('./src/views/**/*')
    .pipe(gulp.dest('./dist/views/'));
});
