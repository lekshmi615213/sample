var gulp = require('gulp'),
	minCss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	jsUglify = require('gulp-uglify');

gulp.task('default', function() {
	console.log("Welcome to AJAY's work")
});
gulp.task('minifyCss', function() {
	return gulp.src('./css/*.css')
	.pipe(minCss({ keepSpecialComments: 1 }))
	.pipe(gulp.dest('gulpCss'));
});
gulp.task('compileSass', function() {
	return gulp.src('./css/*.scss')
	.pipe(sass())
	.pipe(minCss({ keepSpecialComments: 1 }))
	.pipe(gulp.dest('gulpCss'));
});
gulp.task('compressJs', function() {
	return gulp.src('./js/*.js')
	.pipe(jsUglify())
	.pipe(gulp.dest('gulpJs'));
});
gulp.task('watch', function() {
	gulp.watch('./css/*.scss', ['compileSass']);
	gulp.watch('./js/*.js', ['compressJs']);
});
