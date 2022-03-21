require('dotenv').config();
const fs = require('fs')
const request = require('request');
let imagbackes = process.env.RUTAIMAGEMOVIESBACK
let imagposteres = process.env.RUTAIMAGEMOVIESPOSTER

let imagbacken = process.env.RUTAIMAGEMOVIEENBACK
let imagposteren = process.env.RUTAIMAGEMOVIEENPOSTER

let imgbackadult = process.env.RUTAIMAGEMOVIEADULTBACK
let imgposteradult = process.env.RUTAIMAGEMOVIEADULTPOSTER

let imgbackseriees = process.env.RUTAIMAGESERIEESBACK
let imgposteries = process.env.RUTAIMAGESERIEESPOSTER
let imgbackcapseriees = process.env.RUTAIMAGECAPSERIEESBACK
let imgpostercapseriees = process.env.RUTAIMAGECAPSERIEESPOSTER

let imgbackserieen = process.env.RUTAIMAGESERIEENBACK
let imgposterien = process.env.RUTAIMAGESERIEENPOSTER
let imgbackcapserieen = process.env.RUTAIMAGECAPSERIEENBACK
let imgpostercapserieen = process.env.RUTAIMAGECAPSERIEENPOSTER

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

export const downloadmovieadultback = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgbackadult + filename)).on('close', callback);
    });
};

export const downloadmovieadultposter = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgposteradult + filename)).on('close', callback);
    });
};

export const downloadserieesback = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgbackseriees + filename)).on('close', callback);
    });
};

export const downloadserieesposter = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgposteries + filename)).on('close', callback);
    });
};

export const downloadcapserieesback = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgbackcapseriees + filename)).on('close', callback);
    });
};

export const downloadcapserieesposter = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgpostercapseriees + filename)).on('close', callback);
    });
};

export const downloadserieenback = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgbackserieen + filename)).on('close', callback);
    });
};

export const downloadserieenposter = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgposterien + filename)).on('close', callback);
    });
};

export const downloadcapserieenback = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgbackcapserieen + filename)).on('close', callback);
    });
};

export const downloadcapserieenposter = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgpostercapserieen + filename)).on('close', callback);
    });
};