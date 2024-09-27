const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss') //recupera arquivos
        .pipe(sass({outputStyle: 'compressed'})) //compila sass
        .pipe(gulp.dest('./dist/sass'));
}

exports.default = styles;
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}