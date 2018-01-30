var gulp = require("gulp");
var pug = require('gulp-pug');
var ts = require("gulp-typescript");
var stylus = require('gulp-stylus');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

var tsProject = ts.createProject("tsconfig.json");

gulp.task('default', ['ts', 'views', 'public_stylesheets', 'public_javascripts', 'public_image']);

gulp.task('ts', function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("./dist/"));
});

gulp.task('views', function () {
  return gulp.src('./src/views/**/*')
    .pipe(gulp.dest('./dist/views/'));
});

gulp.task('public_javascripts', function(){
   gulp.src('src/public/javascripts/**/*.js')
   .pipe(concat('script.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dist/public/javascripts'));
});

gulp.task('public_image', function() {
   gulp.src('src/public/images/**/*.+(png|jpg|gif)')
   .pipe(changed('dist/public/images/'))
   .pipe(imagemin([
     imagemin.gifsicle({interlaced: true}),
imagemin.jpegtran({progressive: true}),
imagemin.optipng({optimizationLevel: 5}),
   ]))
   .pipe(gulp.dest('dist/public/images/'));
});


gulp.task('public_stylesheets', function () {

  var filter_stylus = filter('**/*.styl', { restore: true });

  return gulp.src([
    'src/public/stylesheets/**/*.styl',
    'src/public/stylesheets/**/*.css'
  ])
  .pipe(filter_stylus)
  .pipe(stylus())
  .pipe(filter_stylus.restore)
  .pipe(concat('out.css'))
  .pipe(gulp.dest('dist/public/stylesheets'));

});
