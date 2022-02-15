"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCatPlataformById = exports.getCatPlataformById = exports.getCatPlataform = exports.deleteCatPlataformById = exports.createCatPlataform = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF PLATAFORM


var getCatPlataform = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mysqlconnection.query("CALL PROC_SEL_CAT_PLATAFORM()", function (err, rows, fields) {
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

  return function getCatPlataform(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET CATALOG OF PLATAFORM BY ID


exports.getCatPlataform = getCatPlataform;

var getCatPlataformById = function getCatPlataformById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CAT_PLATAFORM_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CATALOG OF PLATAFORM


exports.getCatPlataformById = getCatPlataformById;

var createCatPlataform = function createCatPlataform(req, res) {
  var NAME_PLATAFORM = req.body.NAME_PLATAFORM;
  var query = "CALL PROC_INS_CAT_PLATAFORM(?);";
  mysqlconnection.query(query, [NAME_PLATAFORM], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF PLATAFORM ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CATALOG OF PLATAFORM


exports.createCatPlataform = createCatPlataform;

var updateCatPlataformById = function updateCatPlataformById(req, res) {
  var NAME_PLATAFORM = req.body.NAME_PLATAFORM;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_CAT_PLATAFORM(?,?)", [NAME_PLATAFORM, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF PLATAFORM UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CATALOG OF PLATAFORM


exports.updateCatPlataformById = updateCatPlataformById;

var deleteCatPlataformById = function deleteCatPlataformById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_CAT_PLATAFORM(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF PLATAFORM DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deleteCatPlataformById = deleteCatPlataformById;