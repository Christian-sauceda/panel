"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCatcategoryById = exports.getCatcategoryByType = exports.getCatcategoryById = exports.getCatcategory = exports.deleteCatcategoryById = exports.createcatcategory = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF CATEGORY


var getCatcategory = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mysqlconnection.query("CALL PROC_SEL_CAT_CATEGORY()", function (err, rows, fields) {
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

  return function getCatcategory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET CATALOG OF CATEGORY BY ID


exports.getCatcategory = getCatcategory;

var getCatcategoryById = function getCatcategoryById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CAT_CATEGORY_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // GET CATALOG OF CATEGORY BY TYPE


exports.getCatcategoryById = getCatcategoryById;

var getCatcategoryByType = function getCatcategoryByType(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CAT_CATEGORY_TYPE(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CATALOG OF CATEGORY


exports.getCatcategoryByType = getCatcategoryByType;

var createcatcategory = function createcatcategory(req, res) {
  var _req$body = req.body,
      NAME = _req$body.NAME,
      TYPE_CONTENT = _req$body.TYPE_CONTENT;
  var query = "CALL PROC_INS_CAT_CATEGORY(?,?);";
  mysqlconnection.query(query, [NAME, TYPE_CONTENT], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF CATEGORY ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CATALOG OF CATEGORY


exports.createcatcategory = createcatcategory;

var updateCatcategoryById = function updateCatcategoryById(req, res) {
  var _req$body2 = req.body,
      NAME = _req$body2.NAME,
      TYPE_CONTENT = _req$body2.TYPE_CONTENT;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_CAT_CATEGORY(?,?,?)", [NAME, TYPE_CONTENT, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF CATEGORY UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CATALOG OF CATEGORY


exports.updateCatcategoryById = updateCatcategoryById;

var deleteCatcategoryById = function deleteCatcategoryById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_CAT_CATEGORY(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF CATEGORY DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deleteCatcategoryById = deleteCatcategoryById;