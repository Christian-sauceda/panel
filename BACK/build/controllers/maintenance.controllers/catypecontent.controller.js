"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCatypeContentById = exports.getCatypeContentById = exports.getCatypeContent = exports.deleteCatypeContentById = exports.createCatypeContent = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF TYPE CONTENT


var getCatypeContent = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mysqlconnection.query("CALL PROC_SEL_CAT_TYPE_CONTENT()", function (err, rows, fields) {
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

  return function getCatypeContent(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET CATALOG OF TYPE CONTENT BY ID


exports.getCatypeContent = getCatypeContent;

var getCatypeContentById = function getCatypeContentById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CAT_TYPE_CONTENT_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CATALOG OF TYPE CONTENT


exports.getCatypeContentById = getCatypeContentById;

var createCatypeContent = function createCatypeContent(req, res) {
  var NAME_TYPE_CONTENT = req.body.NAME_TYPE_CONTENT;
  var query = "CALL PROC_INS_CAT_TYPE_CONTENT(?);";
  mysqlconnection.query(query, [NAME_TYPE_CONTENT], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF TYPE CONTENT ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CATALOG OF TYPE CONTENT


exports.createCatypeContent = createCatypeContent;

var updateCatypeContentById = function updateCatypeContentById(req, res) {
  var NAME_TYPE_CONTENT = req.body.NAME_TYPE_CONTENT;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_CAT_TYPE_CONTENT(?,?)", [NAME_TYPE_CONTENT, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF TYPE CONTENT UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CATALOG OF TYPE CONTENT


exports.updateCatypeContentById = updateCatypeContentById;

var deleteCatypeContentById = function deleteCatypeContentById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_CAT_TYPE_CONTENT(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF TYPE CONTENT DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deleteCatypeContentById = deleteCatypeContentById;