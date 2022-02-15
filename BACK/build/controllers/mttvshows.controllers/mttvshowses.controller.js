"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatetvshowsesById = exports.gettvshowsesById = exports.gettvshowses = exports.deletetvshowsesById = exports.createtvshowses = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF TV SHOWS ES


var gettvshowses = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mysqlconnection.query("CALL PROC_SEL_TVSHOW_ES()", function (err, rows, fields) {
              if (!err) {
                res.status(200).json(rows[0]);
              } else {
                console.log(err);
              }
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function gettvshowses(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET CATALOG OF TV SHOW ES BY ID


exports.gettvshowses = gettvshowses;

var gettvshowsesById = function gettvshowsesById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_TVSHOW_ES_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CATALOG OF TV SHOW ES


exports.gettvshowsesById = gettvshowsesById;

var createtvshowses = function createtvshowses(req, res) {
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
  var query = 'CALL PROC_INS_TVSHOW_ES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  mysqlconnection.query(query, [CODAUDIO, CODCATEGORY, CODUSER, TITLE, TITLE_LATIN, BACK, POSTER, YEAR, CLASIF, COUNTRY, CALIF, DIRECTOR, CAST, SYNOPSIS], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "TV SHOW IN SPANISH ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CATALOG OF TV SHOW ES


exports.createtvshowses = createtvshowses;

var updatetvshowsesById = function updatetvshowsesById(req, res) {
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
  mysqlconnection.query("CALL PROC_UPD_TVSHOW_ES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [CODAUDIO, CODCATEGORY, CODUSER, TITLE, TITLE_LATIN, BACK, POSTER, YEAR, CLASIF, COUNTRY, CALIF, DIRECTOR, CAST, SYNOPSIS, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "TV SHOW IN SPANISH UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CATALOG OF TV SHOW ES


exports.updatetvshowsesById = updatetvshowsesById;

var deletetvshowsesById = function deletetvshowsesById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_TVSHOW_ES(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "TV SHOW IN SPANISH DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deletetvshowsesById = deletetvshowsesById;