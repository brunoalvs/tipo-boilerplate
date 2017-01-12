'use strict'

var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync'),
    proxyLink = 'http://localhost/tipo-boilerplate/build', //Endereço do seu localhost (para usar com PHP)

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
    del = require('del'),
    runSequence = require('run-sequence');


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

// gulp.task('browserSync', function() {
//     browserSync.init({
//         server: {
//             baseDir: 'dist'
//         },
//     })
// });

gulp.task('dev', function() {
    connect.server({}, function() {
        browserSync({
            proxy: proxyLink
        });
    });
});


gulp.task('sass', function() {
    return gulp.src('build/assets/sass/**/*.{sass,scss}')
        .pipe(sourcemaps.init())
        .pipe(sass()) // Convert Sass to CSS with gulp-sass
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('useref', function() {
    return gulp.src('build/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        // Minifica apenas se tiver um arquivo CSS
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
  return gulp.src('build/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Cache de imagens que foram minificadas com o imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/assets/images'))
});

gulp.task('fonts', function() {
  return gulp.src('build/assets/fonts/**/*')
  .pipe(gulp.dest('dist/assets/fonts'))
})

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('watch', function() {
    gulp.watch('build/assets/sass/**/*.{sass,scss}', ['sass']);
    gulp.watch('build/**/*.{php,html}').on('change', function() {
        browserSync.reload();
    });
    gulp.watch('build/assets/js/**/*.js').on('change', function() {
        browserSync.reload();
    });
});

gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'images', 'fonts'],
        callback
    )
})

gulp.task('default', function(callback) {
    runSequence(['sass', 'dev', 'watch'],
        callback
    )
})

// https://css-tricks.com/gulp-for-beginners/