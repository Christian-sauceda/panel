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

let imgbackserieen = process.env.RUTAIMAGESERIEENBACK
let imgposterien = process.env.RUTAIMAGESERIEENPOSTER

let imgbackcapserie = process.env.RUTAIMAGECAPSERIEBACK
let imgpostercapserie = process.env.RUTAIMAGECAPSERIEPOSTER

console.log(imgpostercapserie)
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

/* series ingles */
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

export const downloadcapserieback = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgbackcapserie + filename)).on('close', callback);
    });
};

export const downloadcapserieposter = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream('.' + imgpostercapserie + filename)).on('close', callback);
    });
};

