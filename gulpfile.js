var gulp = require("gulp"),
  cssmin = require("gulp-minify-css"),
  uglify = require("gulp-uglify"),
  sass = require("gulp-sass"),
  watch = require("gulp-watch");

gulp.task('default', function(){

});
gulp.task('minifycss', function(){
 return gulp.src('./css/*.css')
 .pipe(cssmin({keepSpecialComment:1}))
 .pipe(gulp.dest('newgulp'));
});
gulp.task('compress', function(){
 return gulp.src('./js/*.js')
 .pipe(uglify())
 .pipe(gulp.dest('newjsgulp'));
});
gulp.task('sass', function(){
 gulp.src('./css/*.scss')
 .pipe(sass())
 .pipe(cssmin({keepSpecialComment:1}))
 .pipe(gulp.dest('newgulp'))
});
gulp.task('watch', function(){
	gulp.watch('./css/*.scss',['sass']);
	gulp.watch('./js/*.js',['compress']);
});
