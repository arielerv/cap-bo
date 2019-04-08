const {dest, src} = require('gulp');
const $ = require('gulp-load-plugins')();

const copyConfig = environment => () => src(`./config.${environment}.json`)
    .pipe($.rename('config.json'))
    .pipe(dest('dist'));

const loadConfig = environment => cb => {
    global.config = require(`../config.${environment}.json`);
    cb();
};

const copyProdConfig = copyConfig('prod');
copyProdConfig.displayName = 'copy PROD config';

const copyUatConfig = copyConfig('uat');
copyUatConfig.displayName = 'copy UAT config';

const loadProdConfig = loadConfig('prod');
loadProdConfig.displayName = 'load PROD config';

const loadUatConfig = loadConfig('uat');
loadUatConfig.displayName = 'load UAT config';

exports.copyProdConfig = copyProdConfig;
exports.copyUatConfig = copyUatConfig;

exports.loadProdConfig = loadProdConfig;
exports.loadUatConfig = loadUatConfig;
