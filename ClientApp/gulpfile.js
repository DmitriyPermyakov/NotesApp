"use strict"

const {src, dest, parallel, series, watch} = pkg;
import pkg from 'gulp';

import autoPrefixer from 'gulp-autoprefixer';
import cssBeautify from 'gulp-cssbeautify';
import removeComments from 'gulp-strip-css-comments';
import rename from 'gulp-rename';

import  initSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(initSass);

import imagemin from 'gulp-imagemin';

import cssnano from 'gulp-cssnano';
import rigger from 'gulp-rigger';
import uglify from 'gulp-uglify';
import plumber from 'gulp-plumber';
import del from 'del';

import server from 'browser-sync';

var path = {
    build: {
        html: 'dist/',
        js: 'dist/assets/js/',
        css: 'dist/assets/css/',
        images: 'dist/assets/img/',
    },
    src: {
        html: '*.html',
        js: 'src/js/*.js',
        css: 'src/sass/style.scss',
        images: 'src/img/**/*.{jpeg,jpg,png,svg,gif,ico}',
    },
    watcher: {
        html: '*.html',
        js: 'src/js/**/*.js',
        css: 'src/sass/**/*.scss',
        images: 'src/img/**/*.{jpeg,jpg,png,svg,gif,ico}'
    },
    clean: './dist/',
}

function browserSync() {
    server.init({
        server: {
            baseDir: '.'
        },
        port: 3000
    });
}

function watchFiles() {
    watch([path.watcher.html], html);
    watch([path.watcher.css], css);
    watch([path.watcher.js], js);
    watch([path.watcher.images], images);
}

function html() {
    return src(path.src.html)
        .pipe(plumber())
        .pipe(dest(path.build.html))
        .pipe(server.stream());
}

function css() {
    return src(path.src.css)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoPrefixer({
            cascade: false
        }))
        .pipe(cssBeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(server.stream())
}

function js() {
    return src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min',
            extname: '.js'
        }))
        .pipe(dest(path.build.js))
        .pipe(server.stream())
}

function images() {
    return src(path.src.images)
        .pipe(imagemin())
        .pipe(dest(path.build.images));
}

function clean() {
    return del(path.clean);
}

const build = series(clean, parallel(html, css, js, images));
const changeWatcher = parallel(build, watchFiles, browserSync);

export default changeWatcher;