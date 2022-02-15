"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCataudioById = exports.getCataudioById = exports.getCataudio = exports.deleteCataudioById = exports.createCataudio = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF AUDIO


var getCataudio = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mysqlconnection.query("CALL PROC_SEL_CAT_AUDIO()", function (err, rows, fields) {
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

  return function getCataudio(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET CATALOG OF AUDIO BY ID


exports.getCataudio = getCataudio;

var getCataudioById = function getCataudioById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CAT_AUDIO_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CATALOG OF AUDIO


exports.getCataudioById = getCataudioById;

var createCataudio = function createCataudio(req, res) {
  var NAME = req.body.NAME;
  var query = "CALL PROC_INS_CAT_AUDIO(?);";
  mysqlconnection.query(query, [NAME], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF AUDIO ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CATALOG OF AUDIO


exports.createCataudio = createCataudio;

var updateCataudioById = function updateCataudioById(req, res) {
  var NAME = req.body.NAME;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_CAT_AUDIO(?,?)", [NAME, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF AUDIO UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CATALOG OF AUDIO


exports.updateCataudioById = updateCataudioById;

var deleteCataudioById = function deleteCataudioById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_CAT_AUDIO(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF AUDIO DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deleteCataudioById = deleteCataudioById;