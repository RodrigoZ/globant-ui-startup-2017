(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents an Actor
 */
var Actor =

/**
 * constructor - Creates an actor, with its name and age
 *
 * @param  {string} name Actor Name
 * @param  {number} age  Actor Age
 */
function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

module.exports = Actor;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = new Map();
  }

  /**
   * isFunction - indicates if a variable is a function
   *
   * @param  {object} obj the object to be verified.
   * @return {boolean}     Result of object verification
   */


  _createClass(EventEmitter, [{
    key: 'isFunction',
    value: function isFunction(obj) {
      return typeof obj == 'function';
    }

    /**
     * on - Suscribes an object
     *
     * @param  {string} label    Type of notificiation listener will receive
     * @param  {function} callback Function to invoke when event is emitted
     */

  }, {
    key: 'on',
    value: function on(label, callback) {
      this.listeners.has(label) || this.listeners.set(label, []);
      this.listeners.get(label).push(callback);
    }

    /**
     * off - Unsuscribes an object
     *
     * @param  {type} label    Type of notificiation listener will receive
     * @param  {type} callback Function to invoke when event is emitted
     */

  }, {
    key: 'off',
    value: function off(label, callback) {
      var listener = this.listeners.get(label),
          index = void 0;

      if (listeners && listeners.length) {
        index = listeners.reduce(function (i, listener, index) {
          return isFunction(listener) && listener === callback ? i = index : i;
        }, -1);

        if (index > -1) {
          listeners.splice(index, 1);
          this.listeners.set(label, listeners);
          return true;
        }
      }
      return false;
    }

    /**
     * emit - description
     *
     * @param  {string} label   Type of notification listeners will receive
     * @param  {type} ...args  Name of the event
     * @return {boolean}         Returns true value if everything went well
     */

  }, {
    key: 'emit',
    value: function emit(label) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this.listeners.get(label);

      if (listeners && listeners.length) {
        listeners.forEach(function (listener) {
          listener.apply(undefined, args);
        });
        return true;
      }
      return false;
    }
  }]);

  return EventEmitter;
}();

module.exports = EventEmitter;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  /**
   * log - Displays on console the name of the emitted event.
   *
   * @param  {string} info The name of the emitted event
   */


  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log("The " + info + " event has been emitted.");
    }
  }]);

  return Logger;
}();

module.exports = Logger;

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = require("./EventEmitter.es6");

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.actors = [];
    return _this;
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      this.emit("play", "Play");
    }
  }, {
    key: "pause",
    value: function pause() {
      this.emit("pause", "Pause");
    }
  }, {
    key: "resume",
    value: function resume() {
      this.emit("resume", "Resume");
    }
  }, {
    key: "addCast",
    value: function addCast(cast) {
      if (Array.isArray(cast)) {
        for (var i = 0; i < cast.length; i++) {
          this.actors.push(cast[0]);
        }
      } else {
        this.actors.push(cast);
      }
    }
  }]);

  return Movie;
}(_EventEmitter3.default);

module.exports = Movie;

},{"./EventEmitter.es6":2}],5:[function(require,module,exports){
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

},{"./classes/Actor.es6":1,"./classes/Logger.es6":3,"./classes/Movie.es6":4}]},{},[5]);
