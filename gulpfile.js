'use strict'

var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync'),
    proxyLink = 'http://localhost/nr2/public_html',

    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat-js'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin');


gulp.task('connect', function() {
    connect.server({}, function() {
        browserSync({
            proxy: proxyLink
        });
    });

    gulp.watch('**/*.{php,css}').on('change', function() {
        browserSync.reload();
    });
});

// gulp.task('images', function(){
//   return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
//   // Caching images that ran through imagemin
//   .pipe(cache(imagemin({
//       interlaced: true
//     })))
//   .pipe(gulp.dest('dist/images'))
// });

// gulp.task('fonts', function() {
//   return gulp.src('app/fonts/**/*')
//   .pipe(gulp.dest('dist/fonts'))
// })

// gulp.task('build', [`clean`, `sass`, `useref`, `images`, `fonts`], function (){
//   console.log('Building files');
// })

gulp.task('default', ['connect']);


// https://css-tricks.com/gulp-for-beginners/