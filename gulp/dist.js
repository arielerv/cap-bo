const {dest, parallel, src} = require('gulp');
const config = require('./config.json');
const $ = require('gulp-load-plugins')();

const clean = () => require('del')(config.clean.dist);

const copy = () => src(config.copy.dist.src, {base: '.'})
    .pipe(dest(config.copy.dist.dest));

const webpack = () => src('index.js')
    .pipe(require('webpack-stream')(require('../webpack.config.prod.js'), require('webpack')))
    .pipe(dest('dist/public/assets'));

const htmlmin = () => src(config.htmlmin.src)
    // eslint-disable-next-line lodash/prefer-lodash-method
    .pipe($.replace('@version', `v=${Date.now()}`))
    .pipe($.htmlmin(config.htmlmin.options))
    .pipe(dest(config.htmlmin.dest));

const distPackage = () => src('./package.json')
    .pipe($.jsonEditor(
        json => {
            delete json.devDependencies;
            return json;
        }, {end_with_newline: true}
    ))
    .pipe(dest('dist/'));

exports.clean = clean;
exports.dist = parallel(webpack, htmlmin, copy, distPackage);
