"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCatepgchannelById = exports.getCatepgchannelById = exports.getCatepgchannel = exports.deleteCatepgchannelById = exports.createCatepgchannel = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlconnection = require("../../database"); // GET ALL CATALOG OF EPG CHANNEL


var getCatepgchannel = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mysqlconnection.query("CALL PROC_SEL_CAT_EPG_CHANNEL()", function (err, rows, fields) {
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

  return function getCatepgchannel(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET CATALOG OF EPG CHANNEL BY ID


exports.getCatepgchannel = getCatepgchannel;

var getCatepgchannelById = function getCatepgchannelById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_SEL_CAT_EPG_CHANNEL_COD(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; // CREATE CATALOG OF EPG CHANNEL


exports.getCatepgchannelById = getCatepgchannelById;

var createCatepgchannel = function createCatepgchannel(req, res) {
  var _req$body = req.body,
      COD_EPG = _req$body.COD_EPG,
      COD_SERVER = _req$body.COD_SERVER,
      NAME_CHANNEL = _req$body.NAME_CHANNEL;
  var query = "CALL PROC_INS_CAT_EPG_CHANNEL(?,?,?);";
  mysqlconnection.query(query, [COD_EPG, COD_SERVER, NAME_CHANNEL], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF EPG CHANNEL ADDED"
      });
    } else {
      console.log(req.body);
    }
  });
}; // UPDATE CATALOG OF EPG CHANNEL


exports.createCatepgchannel = createCatepgchannel;

var updateCatepgchannelById = function updateCatepgchannelById(req, res) {
  var _req$body2 = req.body,
      COD_EPG = _req$body2.COD_EPG,
      COD_SERVER = _req$body2.COD_SERVER,
      NAME_CHANNEL = _req$body2.NAME_CHANNEL;
  var COD = req.params.COD;
  mysqlconnection.query("CALL PROC_UPD_CAT_EPG_CHANNEL(?,?,?,?)", [COD_EPG, COD_SERVER, NAME_CHANNEL, COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF EPG CHANNEL UPDATED"
      });
    } else {
      console.log(err);
    }
  });
}; // DELETE CATALOG OF EPG CHANNEL


exports.updateCatepgchannelById = updateCatepgchannelById;

var deleteCatepgchannelById = function deleteCatepgchannelById(req, res) {
  var COD = req.params.COD;
  mysqlconnection.query('CALL PROC_DEL_CAT_EPG_CHANNEL(?)', [COD], function (err, rows, fields) {
    if (!err) {
      res.json({
        Status: "CATALOG OF EPG CHANNEL DELETED"
      });
    } else {
      console.log(err);
    }
  });
};

exports.deleteCatepgchannelById = deleteCatepgchannelById;