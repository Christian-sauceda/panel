"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign_up = exports.login = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bcryptjs = require("bcryptjs");

var mysqlconnection = require("../../database");

var jwt = require("jsonwebtoken"); // signup


var sign_up = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, NAME, PASS, TYPE, IND, salt, hash, query;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, NAME = _req$body.NAME, PASS = _req$body.PASS, TYPE = _req$body.TYPE, IND = _req$body.IND;
            _context.next = 3;
            return bcryptjs.genSalt(10);

          case 3:
            salt = _context.sent;
            _context.next = 6;
            return bcryptjs.hash(PASS, salt);

          case 6:
            hash = _context.sent;
            query = "CALL PROC_INS_SYS_USER(?,?,?,?)";
            mysqlconnection.query(query, [NAME, hash, TYPE, IND], function (err, results) {
              if (err) {
                return res.status(500).json({
                  message: "ERROR WHEN CREATING THE USER",
                  error: err
                });
              }

              return res.status(201).json({
                message: "USER CREATED SUCCESSFULLY",
                results: results
              });
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sign_up(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //login with jwt


exports.sign_up = sign_up;

var login = function login(req, res, next) {
  mysqlconnection.query("SELECT * FROM SYS_USER WHERE USER_NAME = ".concat(mysqlconnection.escape(req.body.NAME), ";"), function (err, result) {
    if (err) {
      throw err;
      return res.status(400).send({
        message: err
      });
    }

    if (!result.length) {
      return res.status(400).send({
        message: "USERNAME OR PASSWORD INCORRECT!"
      });
    }

    bcryptjs.compare(req.body.PASSWORD, result[0].PASSWORD, function (bErr, bresult) {
      if (bErr) {
        throw bErr;
        return res.status(400).send({
          message: "USERNAME OR PASSWORD INCORRECT"
        });
      }

      if (bresult) {
        var token = jwt.sign({
          COD: result[0].COD_USER,
          NAME: result[0].USER_NAME,
          TYPE: result[0].USER_TYPE
        }, "secret", {
          expiresIn: "1h"
        });
        return res.status(200).send({
          message: "LOGIN SUCCESSFUL",
          COD: result[0].COD_USER,
          NAME: result[0].USER_NAME,
          TYPE: result[0].USER_TYPE,
          token: token
        });
      }

      return res.status(401).send({
        message: "USERNAME OR PASSWORD INCORRECT"
      });
    });
  });
};

exports.login = login;