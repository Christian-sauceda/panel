"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCatQualityById = exports.getCatQualityById = exports.getCatQuality = exports.deleteCatQualityById = exports.createCatQuality = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF QUALITY


var getCatQuality = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mysqlconnection.query("CALL PROC_SEL_CAT_QUALITY()", function (err, rows, fields) {
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

  return function getCatQuality(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET CATALOG OF QUALITY BY ID


exports.getCatQuality = getCatQuality;

var getCatQualityById = function getCatQualityById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CAT_QUALITY_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CATALOG OF QUALITY


exports.getCatQualityById = getCatQualityById;

var createCatQuality = function createCatQuality(req, res) {
  var NAME_QUALITY = req.body.NAME_QUALITY;
  var query = "CALL PROC_INS_CAT_QUALITY(?);";
  mysqlconnection.query(query, [NAME_QUALITY], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF QUALITY ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CATALOG OF QUALITY


exports.createCatQuality = createCatQuality;

var updateCatQualityById = function updateCatQualityById(req, res) {
  var NAME_QUALITY = req.body.NAME_QUALITY;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_CAT_QUALITY(?,?)", [NAME_QUALITY, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF QUALITY UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CATALOG OF QUALITY


exports.updateCatQualityById = updateCatQualityById;

var deleteCatQualityById = function deleteCatQualityById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_CAT_QUALITY(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF QUALITY DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deleteCatQualityById = deleteCatQualityById;