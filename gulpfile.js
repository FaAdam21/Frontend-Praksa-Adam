const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    console.log("SCSS fordítás indul...");
    return gulp.src('./scss/**/*.scss') // Path to SCSS files
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css')) // Output directory for CSS files
        .on('end', () => console.log("SCSS fordítás befejeződött!"));
}

function watchSass() {
    console.log("Figyelés indul...");
    gulp.watch('./scss/**/*.scss', compileSass);
}

gulp.task('sass', compileSass);
gulp.task('watch', watchSass);
