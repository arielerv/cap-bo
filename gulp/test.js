const {parallel, src} = require('gulp');
const config = require('./config.json');
const $ = require('gulp-load-plugins')();

const eslint = () => src(config.eslint.src)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());

const sasslint = () => src('src/sass/**/*.scss')
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError());

exports.test = parallel(eslint, sasslint);
