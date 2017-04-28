"use strict";

var _Movie = require("./classes/Movie.es6");

var _Movie2 = _interopRequireDefault(_Movie);

var _Actor = require("./classes/Actor.es6");

var _Actor2 = _interopRequireDefault(_Actor);

var _Logger = require("./classes/Logger.es6");

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Social = {
  like: function like(friendName) {
    console.log(friendName + " likes " + this.title);
  },
  share: function share(friendName) {
    console.log(friendName + " share " + this.title);
  }
};

var logger = new _Logger2.default();
var divergente = new _Movie2.default("Divergente", 2014, 139);

Object.assign(divergente, Social);

divergente.like("Francisco");
divergente.share("Francisco");

var shailene = new _Actor2.default("Shailene Woodley", 25);
var otherCast = [new _Actor2.default("Theo James", 32), new _Actor2.default("Jai Courtney", 31)];