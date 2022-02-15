"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(3001);

console.log('Server is running on http://localhost:3001');