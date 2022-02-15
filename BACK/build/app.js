"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _cataudio = _interopRequireDefault(require("./routes/maintenance.routes/cataudio.routes"));

var _catcategory = _interopRequireDefault(require("./routes/maintenance.routes/catcategory.routes"));

var _catepgchannel = _interopRequireDefault(require("./routes/maintenance.routes/catepgchannel.routes"));

var _catformatvideo = _interopRequireDefault(require("./routes/maintenance.routes/catformatvideo.routes"));

var _catplataform = _interopRequireDefault(require("./routes/maintenance.routes/catplataform.routes"));

var _catquality = _interopRequireDefault(require("./routes/maintenance.routes/catquality.routes"));

var _catypecontent = _interopRequireDefault(require("./routes/maintenance.routes/catypecontent.routes"));

var _catypeserver = _interopRequireDefault(require("./routes/maintenance.routes/catypeserver.routes"));

var _mtmoviees = _interopRequireDefault(require("./routes/movie.routes/mtmoviees.routes"));

var _mtmovieen = _interopRequireDefault(require("./routes/movie.routes/mtmovieen.routes"));

var _mtmovieadult = _interopRequireDefault(require("./routes/movie.routes/mtmovieadult.routes"));

var _mttvshowsen = _interopRequireDefault(require("./routes/tvshows.routes/mttvshowsen.routes"));

var _mttvshowses = _interopRequireDefault(require("./routes/tvshows.routes/mttvshowses.routes"));

var _mttvshowschapter = _interopRequireDefault(require("./routes/tvshowschapter.routes/mttvshowschapter.routes"));

var _user = _interopRequireDefault(require("./routes/auth.routes/user.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set("pkg", _package["default"]);
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    version: app.get("pkg").version,
    description: app.get("pkg").description
  });
});
app.use('/cataudio', _cataudio["default"]);
app.use('/catcategory', _catcategory["default"]);
app.use('/catepgchannel', _catepgchannel["default"]);
app.use('/catformatvideo', _catformatvideo["default"]);
app.use('/catplataform', _catplataform["default"]);
app.use('/catquality', _catquality["default"]);
app.use('/catypecontent', _catypecontent["default"]);
app.use('/catypeserver', _catypeserver["default"]);
app.use('/mtmovie/es', _mtmoviees["default"]);
app.use('/mtmovie/en', _mtmovieen["default"]);
app.use('/mtmovie/adult', _mtmovieadult["default"]);
app.use('/mttvshows/en', _mttvshowsen["default"]);
app.use('/mttvshows/es', _mttvshowses["default"]);
app.use('/mttvshowschapter', _mttvshowschapter["default"]);
app.use('/', _user["default"]);
var _default = app;
exports["default"] = _default;