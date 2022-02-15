"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCatypeServerById = exports.getCatypeServerById = exports.getCatypeServer = exports.deleteCatypeServerById = exports.createCatypeServer = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF TYPE SERVER


var getCatypeServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mysqlconnection.query("CALL PROC_SEL_CAT_TYPE_SERVER()", function (err, rows, fields) {
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

  return function getCatypeServer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET CATALOG OF TYPE SERVER BY ID


exports.getCatypeServer = getCatypeServer;

var getCatypeServerById = function getCatypeServerById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CAT_TYPE_SERVER_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CATALOG OF TYPE SERVER


exports.getCatypeServerById = getCatypeServerById;

var createCatypeServer = function createCatypeServer(req, res) {
  var _req$body = req.body,
      NAME_TYPE_SERVER = _req$body.NAME_TYPE_SERVER,
      URL = _req$body.URL;
  var query = "CALL PROC_INS_CAT_TYPE_SERVER(?,?);";
  mysqlconnection.query(query, [NAME_TYPE_SERVER, URL], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF TYPE SERVER ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CATALOG OF TYPE SERVER


exports.createCatypeServer = createCatypeServer;

var updateCatypeServerById = function updateCatypeServerById(req, res) {
  var _req$body2 = req.body,
      NAME_TYPE_SERVER = _req$body2.NAME_TYPE_SERVER,
      URL = _req$body2.URL;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_CAT_TYPE_SERVER(?,?,?)", [NAME_TYPE_SERVER, URL, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF TYPE SERVER UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CATALOG OF TYPE SERVER


exports.updateCatypeServerById = updateCatypeServerById;

var deleteCatypeServerById = function deleteCatypeServerById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_CAT_TYPE_SERVER(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF TYPE SERVER DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deleteCatypeServerById = deleteCatypeServerById;