const {parallel, series} = require('gulp');

const {loadProdConfig, loadUatConfig} = require('./gulp/config');
const {clean, dist} = require('./gulp/dist');
const {test} = require('./gulp/test');

exports.test = test;

exports.build = series(
    parallel(clean, loadProdConfig),
    dist
);

exports['build-uat'] = series(
    parallel(clean, loadUatConfig),
    dist
);
