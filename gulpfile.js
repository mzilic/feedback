var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var jsPath = ['feedback.js'];
var cssPath = ['feedback.css'];

gulp.task('scripts', function () {
  return gulp.src(jsPath)
  .pipe(plugins.concat('all.js'))
  .pipe(plugins.rename('feedback.min.js'))
  .pipe(plugins.uglify())
  .pipe(gulp.dest('.'));
});

gulp.task('css', function () {
  return gulp.src(cssPath)
  .pipe(plugins.concat('all.css'))
  .pipe(plugins.minifyCss())
  .pipe(plugins.concat('feedback.min.css'))
  .pipe(gulp.dest('.'));
});

gulp.task('default', ['scripts', 'css']);
