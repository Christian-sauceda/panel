"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCatformartvideoById = exports.getCatformartvideoById = exports.getCatformartvideo = exports.deleteCatformartvideoById = exports.createCatformartvideo = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF FORMAT VIDEO


var getCatformartvideo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mysqlconnection.query("CALL PROC_SEL_CAT_FORMAT_VIDEO()", function (err, rows, fields) {
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

  return function getCatformartvideo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET CATALOG OF FORMAT VIDEO BY ID


exports.getCatformartvideo = getCatformartvideo;

var getCatformartvideoById = function getCatformartvideoById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CAT_FORMAT_VIDEO_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CATALOG OF FORMAT VIDEO


exports.getCatformartvideoById = getCatformartvideoById;

var createCatformartvideo = function createCatformartvideo(req, res) {
  var NAME_FORMAT = req.body.NAME_FORMAT;
  var query = "CALL PROC_INS_CAT_FORMAT_VIDEO(?);";
  mysqlconnection.query(query, [NAME_FORMAT], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF FORMAT VIDEO ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CATALOG OF FORMAT VIDEO


exports.createCatformartvideo = createCatformartvideo;

var updateCatformartvideoById = function updateCatformartvideoById(req, res) {
  var NAME_FORMAT = req.body.NAME_FORMAT;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_CAT_FORMAT_VIDEO(?,?)", [NAME_FORMAT, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF FORMAT VIDEO UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CATALOG OF FORMAT VIDEO


exports.updateCatformartvideoById = updateCatformartvideoById;

var deleteCatformartvideoById = function deleteCatformartvideoById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_CAT_FORMAT_VIDEO(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF FORMAT VIDEO DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deleteCatformartvideoById = deleteCatformartvideoById;