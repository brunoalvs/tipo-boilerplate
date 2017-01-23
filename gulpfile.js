'use strict'

var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync'),
    proxyLink = 'http://localhost/tipo-boilerplate/dist', //Endereço do seu localhost (para usar com PHP)

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
    runSequence = require('run-sequence'),
    notify = require('gulp-notify');

    // Sobe "servidor local" para desenvolvimento
    gulp.task('dev', function() {
        connect.server({}, function() {
            browserSync({
                proxy: proxyLink
            });
        });
    });

    // Compila Sass para CSS, com livereload (browserSync), autoprefixer e sourcemaps configurado.
    gulp.task('sass', function() {
    return gulp.src('build/assets/sass/**/*.{sass,scss}')
        .pipe(sourcemaps.init())
          .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
    });

    gulp.task('useref', function() {
        return gulp.src('build/*.{php,html}')
            .pipe(useref())
            // Minifica apenas se tiver um arquivo JavaScript
            .pipe(gulpIf('*.js', uglify()))
            // Minifica apenas se tiver um arquivo CSS
            .pipe(gulpIf('*.css', cssnano()))
            .pipe(gulp.dest('dist'))
    });

    // Minifica e otimiza todas as imagens da pasta padrão e suas subpastas automaticamente
    gulp.task('images', function(){
        return gulp.src('build/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
            // Cache de imagens que foram minificadas com o imagemin
            .pipe(cache(imagemin({
              interlaced: true
            })))
            .pipe(gulp.dest('dist/assets/images'))
    });

    // Apenas move as fonts do diretório de desenvolvimento para o diretório de deploy.
    gulp.task('fonts', function() {
        return gulp.src('build/assets/fonts/**/*')
            .pipe(gulp.dest('dist/assets/fonts'))
    });

    // Limpa a pasta de destino (deploy)
    gulp.task('clean:dist', function() {
        return del.sync('dist');
    });

    // Assiste mudanças nos arquivos sass, php, html e js. Com qualquer mudança ele acionará a tarefa de cada arquivo e o navegador será atualizado com browserSync
    gulp.task('watch', function() {
        gulp.watch('build/assets/sass/**/*.{sass,scss}', ['sass']);
        gulp.watch('build/**/*.php', ['build:php']);
        gulp.watch('build/**/*.{php,html}').on('change', function() {
            browserSync.reload();
        });
        gulp.watch('build/assets/js/**/*.js', ['build:js'])
        gulp.watch('build/assets/js/**/*.js').on('change', function() {
            browserSync.reload();
        });
    });

    // Compila todo o código para uma pasta de destino, o site gerado estará pronto para o deploy.
    gulp.task('build', function (callback) {
        runSequence('clean:dist',
            ['sass', 'build:php', 'build:scripts', 'useref', 'images', 'fonts'],
            callback
        )
    });

    gulp.task('build:php', function() {
        return gulp.src('build/**/*.php')
            .pipe(gulp.dest('dist'));
    });

    gulp.task('build:scripts', function() {
        return gulp.src('build/assets/js/**/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist/assets/js/'));
    });

    // Tarefa Padrão
    gulp.task('default', function(callback) {
        runSequence(['build', 'dev', 'watch'],
            callback
        )
    });
