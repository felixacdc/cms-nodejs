'use strict';

var htmlMinify = require('html-minifier').minify;

module.exports = {
    minify: minify
};

function minify(content) {
    return htmlMinify(content.fin(this), {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
    })
}