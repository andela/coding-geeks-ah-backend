"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./sequelize/models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));
app.get('/', function (req, res) {
  res.status(200).json({
    status: 200,
    message: 'Welcome to Authors Haven'
  });
});
app.use(function (req, res) {
  res.status(404).json({
    status: 404,
    error: 'route not found'
  });
});
app.use(function (error, req, res, next) {
  res.status(500).json({
    status: 500,
    error: error.message,
    next: next
  });
});
var PORT = process.env.PORT || 3000;

_index["default"].sequelize.sync({
  alter: true
}).then(function () {
  console.log('Database Connected!');
  app.listen(PORT, function () {
    console.log("Server listening on port: ".concat(PORT));
  });
});

var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map