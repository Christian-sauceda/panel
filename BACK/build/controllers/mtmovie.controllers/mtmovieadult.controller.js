"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatemovieadultById = exports.getmovieadultById = exports.getmovieadult = exports.deletemovieadultById = exports.createmovieadult = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF MOVIE ADULT


var getmovieadult = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mysqlconnection.query("CALL PROC_SEL_MOVIE_ADULT()", function (err, rows, fields) {
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

  return function getmovieadult(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET MOVIE ADULT EN BY ID


exports.getmovieadult = getmovieadult;

var getmovieadultById = function getmovieadultById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_MOVIE_ADULT_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE MOVIE ADULT


exports.getmovieadultById = getmovieadultById;

var createmovieadult = function createmovieadult(req, res) {
  var _req$body = req.body,
      CODAUDIO = _req$body.CODAUDIO,
      CODQUALITY = _req$body.CODQUALITY,
      CODCATEGORY = _req$body.CODCATEGORY,
      CODUSER = _req$body.CODUSER,
      TITLE = _req$body.TITLE,
      BACK = _req$body.BACK,
      POSTER = _req$body.POSTER,
      YEAR = _req$body.YEAR,
      DURATION = _req$body.DURATION,
      CODFORMATVIDEO = _req$body.CODFORMATVIDEO,
      URL = _req$body.URL,
      SUBT = _req$body.SUBT,
      SYNOPSIS = _req$body.SYNOPSIS;
  var query = "CALL PROC_INS_MOVIE_ADULT(?,?,?,?,?,?,?,?,?,?,?,?,?)";
  mysqlconnection.query(query, [CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, DURATION, CODFORMATVIDEO, URL, SUBT, SYNOPSIS], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "MOVIE ADULT ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE MOVIE ADULT


exports.createmovieadult = createmovieadult;

var updatemovieadultById = function updatemovieadultById(req, res) {
  var _req$body2 = req.body,
      CODAUDIO = _req$body2.CODAUDIO,
      CODQUALITY = _req$body2.CODQUALITY,
      CODCATEGORY = _req$body2.CODCATEGORY,
      CODUSER = _req$body2.CODUSER,
      TITLE = _req$body2.TITLE,
      BACK = _req$body2.BACK,
      POSTER = _req$body2.POSTER,
      YEAR = _req$body2.YEAR,
      DURATION = _req$body2.DURATION,
      CODFORMATVIDEO = _req$body2.CODFORMATVIDEO,
      URL = _req$body2.URL,
      SUBT = _req$body2.SUBT,
      SYNOPSIS = _req$body2.SYNOPSIS;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_MOVIE_ADULT(?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [CODAUDIO, CODQUALITY, CODCATEGORY, CODUSER, TITLE, BACK, POSTER, YEAR, DURATION, CODFORMATVIDEO, URL, SUBT, SYNOPSIS, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "MOVIE ADULT UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE MOVIE ADULT


exports.updatemovieadultById = updatemovieadultById;

var deletemovieadultById = function deletemovieadultById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_MOVIE_ADULT(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "MOVIE ADULT DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deletemovieadultById = deletemovieadultById;