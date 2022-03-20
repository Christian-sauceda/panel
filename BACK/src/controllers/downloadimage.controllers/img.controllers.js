const fs = require('fs')
const request = require('request');

    export const downloadback = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
            request(uri).pipe(fs.createWriteStream('./src/imgs/movieses/back/' + filename)).on('close', callback);
        });
    };

    export const downloadposter = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
            request(uri).pipe(fs.createWriteStream('./src/imgs/movieses/poster/' + filename)).on('close', callback);
        });
    };