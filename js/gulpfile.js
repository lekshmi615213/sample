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
 return gulp.src('./js/seemy.js')
 .pipe(uglify())
 .pipe(gulp.dest('newjsgulp'));
});
gulp.task('sass', function(){
 gulp.src('./css/seemy.scss')
 .pipe(sass())
 .pipe(cssmin({keepSpecialComment:1}))
 .pipe(gulp.dest('newgulp'))
});
gulp.task('watch', function(){
	gulp.watch('./css/seemy.scss',['sass']);
	gulp.watch('./js/seemy.js',['compress']);
});
