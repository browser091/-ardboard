const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss =require('gulp-concat-css')

function style() {
    return gulp.src('src/sass/*.sass')
    .pipe(sass().on('error',sass.logError))
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest('src/css'))
  }
function watch() {

    gulp.watch('src/sass/*.sass', style)
  
}

exports.style = style;
exports.watch = watch;