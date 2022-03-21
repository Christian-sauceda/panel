require('dotenv').config();
const fs = require('fs')
const request = require('request');
let imagbackes = process.env.RUTAIMAGEMOVIESBACK
let imagposteres = process.env.RUTAIMAGEMOVIESPOSTER

let imagbacken = process.env.RUTAIMAGEMOVIEENBACK
let imagposteren = process.env.RUTAIMAGEMOVIEENPOSTER

export const downloadmovieesback = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imagbackes + filename)).on('close', callback);
    });
};

export const downloadmovieesposter = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imagposteres + filename)).on('close', callback);
    });
};

export const downloadmovieenback = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imagbacken + filename)).on('close', callback);
    });
};

export const downloadmovieenposter = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imagposteren + filename)).on('close', callback);
    });
};