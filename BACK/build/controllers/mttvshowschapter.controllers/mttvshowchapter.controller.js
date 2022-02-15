"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatetvshowsChapterById = exports.getchapterBytvShow = exports.getchapterByChapter = exports.deletetvshowsChapterById = exports.createtvshowChapter = void 0;

var mysqlconnection = require("../../database"); // GET ALL CHAPTERS BY TV SHOW


var getchapterBytvShow = function getchapterBytvShow(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CHAPTER_TVSHOW(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // GET ALL CHAPTER BY COD


exports.getchapterBytvShow = getchapterBytvShow;

var getchapterByChapter = function getchapterByChapter(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CHAPTER_CHAPTER(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CHAPTER FOR TV SHOW


exports.getchapterByChapter = getchapterByChapter;

var createtvshowChapter = function createtvshowChapter(req, res) {
  var _req$body = req.body,
      COD_CONTENT = _req$body.COD_CONTENT,
      COD_FORMAT_VIDEO = _req$body.COD_FORMAT_VIDEO,
      COD_USER = _req$body.COD_USER,
      NAME_CHAPTER = _req$body.NAME_CHAPTER,
      NUMBER_SEASON = _req$body.NUMBER_SEASON,
      NUMBER_CHAPTER = _req$body.NUMBER_CHAPTER,
      SYNOSIS = _req$body.SYNOSIS,
      SUPTITLE = _req$body.SUPTITLE,
      URL = _req$body.URL;
  var query = 'CALL PROC_INS_CHAPTER(?,?,?,?,?,?,?,?,?)';
  mysqlconnection.query(query, [COD_CONTENT, COD_FORMAT_VIDEO, COD_USER, NAME_CHAPTER, NUMBER_SEASON, NUMBER_CHAPTER, SYNOSIS, SUPTITLE, URL], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CHAPTER FOR TV SHOW ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CHAPTER FOR TV SHOW


exports.createtvshowChapter = createtvshowChapter;

var updatetvshowsChapterById = function updatetvshowsChapterById(req, res) {
  var _req$body2 = req.body,
      COD_CONTENT = _req$body2.COD_CONTENT,
      NAME_CHAPTER = _req$body2.NAME_CHAPTER,
      NUMBER_SEASON = _req$body2.NUMBER_SEASON,
      NUMBER_CHAPTER = _req$body2.NUMBER_CHAPTER,
      COD_FORMAT_VIDEO = _req$body2.COD_FORMAT_VIDEO,
      COD_USER = _req$body2.COD_USER,
      SYNOSIS = _req$body2.SYNOSIS,
      URL = _req$body2.URL,
      SUPTITLE = _req$body2.SUPTITLE;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_CHAPTER(?,?,?,?,?,?,?,?,?,?)", [COD_CONTENT, NAME_CHAPTER, NUMBER_SEASON, NUMBER_CHAPTER, COD_FORMAT_VIDEO, COD_USER, SYNOSIS, URL, SUPTITLE, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CHAPTER FOR TV SHOW UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CHAPTER FOR TV SHOW


exports.updatetvshowsChapterById = updatetvshowsChapterById;

var deletetvshowsChapterById = function deletetvshowsChapterById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_CHAPTER(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CHAPTER FOR TV SHOW DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deletetvshowsChapterById = deletetvshowsChapterById;