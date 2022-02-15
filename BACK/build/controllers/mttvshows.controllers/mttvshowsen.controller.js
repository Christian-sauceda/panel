"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatetvshowsenById = exports.gettvshowsenById = exports.gettvshowsen = exports.deletetvshowsenById = exports.createtvshowsen = void 0;

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF TV SHOWS EN


var gettvshowsen = function gettvshowsen(req, res) {
  mysqlconnection.query("CALL PROC_SEL_TVSHOW_EN()", function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // GET CATALOG OF TV SHOW EN BY ID


exports.gettvshowsen = gettvshowsen;

var gettvshowsenById = function gettvshowsenById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_TVSHOW_EN_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CATALOG OF TV SHOW EN


exports.gettvshowsenById = gettvshowsenById;

var createtvshowsen = function createtvshowsen(req, res) {
  var _req$body = req.body,
      CODAUDIO = _req$body.CODAUDIO,
      CODCATEGORY = _req$body.CODCATEGORY,
      CODUSER = _req$body.CODUSER,
      TITLE = _req$body.TITLE,
      TITLE_LATIN = _req$body.TITLE_LATIN,
      BACK = _req$body.BACK,
      POSTER = _req$body.POSTER,
      YEAR = _req$body.YEAR,
      CLASIF = _req$body.CLASIF,
      COUNTRY = _req$body.COUNTRY,
      CALIF = _req$body.CALIF,
      DIRECTOR = _req$body.DIRECTOR,
      CAST = _req$body.CAST,
      SYNOPSIS = _req$body.SYNOPSIS;
  var query = 'CALL PROC_INS_TVSHOW_EN(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  mysqlconnection.query(query, [CODAUDIO, CODCATEGORY, CODUSER, TITLE, TITLE_LATIN, BACK, POSTER, YEAR, CLASIF, COUNTRY, CALIF, DIRECTOR, CAST, SYNOPSIS], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "TV SHOW IN ENGLISH ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CATALOG OF TV SHOW EN


exports.createtvshowsen = createtvshowsen;

var updatetvshowsenById = function updatetvshowsenById(req, res) {
  var _req$body2 = req.body,
      CODAUDIO = _req$body2.CODAUDIO,
      CODCATEGORY = _req$body2.CODCATEGORY,
      CODUSER = _req$body2.CODUSER,
      TITLE = _req$body2.TITLE,
      TITLE_LATIN = _req$body2.TITLE_LATIN,
      BACK = _req$body2.BACK,
      POSTER = _req$body2.POSTER,
      YEAR = _req$body2.YEAR,
      CLASIF = _req$body2.CLASIF,
      COUNTRY = _req$body2.COUNTRY,
      CALIF = _req$body2.CALIF,
      DIRECTOR = _req$body2.DIRECTOR,
      CAST = _req$body2.CAST,
      SYNOPSIS = _req$body2.SYNOPSIS;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_TVSHOW_EN(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [CODAUDIO, CODCATEGORY, CODUSER, TITLE, TITLE_LATIN, BACK, POSTER, YEAR, CLASIF, COUNTRY, CALIF, DIRECTOR, CAST, SYNOPSIS, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "TV SHOW IN ENGLISH UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CATALOG OF TV SHOW EN


exports.updatetvshowsenById = updatetvshowsenById;

var deletetvshowsenById = function deletetvshowsenById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_TVSHOW_EN(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "TV SHOW IN ENGLISH DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deletetvshowsenById = deletetvshowsenById;