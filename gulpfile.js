'use strict'

var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync').create(),
    proxyLink = 'http://localhost/nr2/public_html',

    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat-js'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    useref = require('gulp-useref'),
    del = require('del');


// gulp.task('connect', function() {
//     connect.server({}, function() {
//         browserSync({
//             proxy: proxyLink
//         });
//     });

//     gulp.watch('**/*.{php,css}').on('change', function() {
//         browserSync.reload();
//     });
// });

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
});

gulp.task('sass', function() {
    return gulp.src('build/assets/sass/**/*.{sass,scss}')
        .pipe(sass()) // Convert Sass to CSS with gulp-sass
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('useref', function() {
    return gulp.src('build/**/*.{html,php}')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        // Minifica apenas se tiver um arquivo CSS
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('build/assets/sass/**/*.{sass,scss}', ['sass']);
    gulp.watch('build/*.php', browserSync.reload);
    gulp.watch('build/assets/js/**/*.js', browserSync.reload);
});

gulp.task('images', function(){
  return gulp.src('build/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/assets/images'))
});

gulp.task('fonts', function() {
  return gulp.src('build/assets/fonts/**/*')
  .pipe(gulp.dest('dist/assets/fonts'))
})

// gulp.task('build', [`clean`, `sass`, `useref`, `images`, `fonts`], function (){
//   console.log('Building files');
// })

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('default', ['connect']);


// https://css-tricks.com/gulp-for-beginners/