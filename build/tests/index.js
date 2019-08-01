"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should();

describe('Test for a url not found', function () {
  it('Should return a status code 404 when url supplied is not found', function () {
    _chai["default"].request(_index["default"]).get('/404/error').end(function (err, res) {
      res.body.should.have.status(404);
      res.body.error.should.equal('route not found');
    });
  });
});
describe('Test the base url / for author-haven', function () {
  it('Should return a status 200', function () {
    _chai["default"].request(_index["default"]).get('/').end(function (err, res) {
      res.body.should.have.status(200);
      res.body.should.be.an('object');
      res.body.message.should.equal('Welcome to Authors Haven');
    });
  });
});
//# sourceMappingURL=index.js.map