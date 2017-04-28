(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

//Exercise 7

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

module.exports = Actor;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

//Exercise 3
/**
 * Determines if an object is a function
 * 
 * @return {Boolean}
 */
var isFunction = function isFunction(obj) {
    return typeof obj == 'function';
};

/**
 * The EventEmitter class has the methods for subscribing (on()), deleting (off()) and emitting (emit()) events. 
 */

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.listeners = new Map();
    }

    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(label, callback) {
            this.listeners.has(label) || this.listeners.set(label, []);
            this.listeners.get(label).push(callback);
        }
    }, {
        key: 'off',
        value: function off(label, callback) {
            var listeners = this.listeners.get(label),
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
    }, {
        key: 'emit',
        value: function emit(label) {
            var listeners = this.listeners.get(label);

            if (listeners && listeners.length) {
                listeners.forEach(function (listener) {
                    listener(label);
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

//Exercise 5
var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log(info + " event emited");
    }
  }]);

  return Logger;
}();

module.exports = Logger;

},{}],4:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _EventEmitter2 = require("./EventEmitter.js");

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} //Exercise 4

var Movie = function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  /**
   * 
   * Suscribes the movie to the pururu and lightOff functions for the play event. 
   * Creates an empty array cast to store actors
   * Creates a boolean attribute playing to check if the movie is playing or paused. 
   *
   * @param  {String} title
   * @param  {Number} year
   * @param  {Number} duration
   */
  function Movie(title, year, duration) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.on('play', this.pururu);
    _this.on("play", this.lightOff);
    _this.on("pause", this.lightOn);
    _this.on("resume", this.lightOff);
    _this.playing = false;
    _this.cast = new Array();
    return _this;
  }

  /**
   * Publishes the play event, changes the status of the playing attribute and logs information to the console
   */

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      this.emit("play");
      console.log(this.title + " playing.");
      this.playing = true;
    }

    /**
     *  Checks the status of the playing attribute, to either
     *  publish the pause event, change the status of the playing attribute and log information to the console;
     *  or just log information to the console
     */

  }, {
    key: "pause",
    value: function pause() {
      if (this.playing) {
        console.log(this.title + ' paused');
        this.emit("pause");
        this.playing = false;
      } else {
        console.log(this.title + ' already paused!');
      }
    }

    /**
     *  Checks the status of the playing attribute, to either
     *  publish the resume event, change the status of the playing attribute and log information to the console;
     *  or just log information to the console
     */

  }, {
    key: "resume",
    value: function resume() {
      if (!this.playing) {
        console.log(this.title + ' resumed');
        this.emit("resume");
        this.playing = true;
      } else {
        console.log(this.title + ' already playing!');
      }
    }

    /**
     * Adds actor(s) to the cast array of the movie
     * @param {Actor} cast or
     * @param {Array} cast
     */

  }, {
    key: "addCast",
    value: function addCast(cast) {
      var _this2 = this;

      if (Array.isArray(cast)) {
        cast.forEach(function (actor) {
          _this2.cast.push(actor);
        });
      } else {
        this.cast.push(cast);
      }
    }
  }, {
    key: "lightOff",
    value: function lightOff() {
      console.log("Luz apagada");
    }
  }, {
    key: "lightOn",
    value: function lightOn() {
      console.log("Luz prendida");
    }
  }, {
    key: "pururu",
    value: function pururu() {
      console.log("Pururu listo");
    }
  }]);

  return Movie;
}(_EventEmitter3.default);

module.exports = Movie;

},{"./EventEmitter.js":2}],5:[function(require,module,exports){
"use strict";

var _Logger = require("./Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

var _Actor = require("./Actor.js");

var _Actor2 = _interopRequireDefault(_Actor);

var _Movie = require("./Movie.js");

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

window.onload = function () {
  testEx4();
  testEx5();
  testEx6();
  testEx8();
};

var testEx4 = function testEx4() {
  console.log("Test exercise 4");
  var Sherlock = new _Movie2.default('Sherlock', 2012, 120); 
  Sherlock.play();
  Sherlock.pause();
  Sherlock.resume();
};

var testEx5 = function testEx5() {
  console.log("Test exercise 5");
  var Sherlock = new _Movie2.default('Sherlock', 2012, 120); 
  var logger = new _Logger2.default();
  Sherlock.on("play", logger.log);
  Sherlock.on("pause", logger.log);
  Sherlock.on("resume", logger.log);
  Sherlock.play();
  Sherlock.pause();
  Sherlock.pause();
  Sherlock.resume();
  Sherlock.resume();
};

//Exercise 6
/**
 * Object with two functions to share or like a movie object. 
 * @type {Object}
 * 
 */
var Social = {

  share: function share(friendName) {
    console.log(friendName + " shares " + this.title);
  },

  like: function like(friendName) {
    console.log(friendName + " likes " + this.title);
  }
};

var testEx6 = function testEx6() {
  console.log("Test exercise 6");
  var iceAge = new _Movie2.default('Ice Age', 2008, 90); //global, to use it in other test cases
  iceAge.play();
  Object.assign(iceAge, Social);
  iceAge.like("Ana");
  iceAge.share("Pedro");
};

//test Exercise 8

var testEx8 = function testEx8() {
  console.log("Test exercise 8");
  var arnold = new _Actor2.default('Arnold Schwarzenegger', 50);
  var will = new _Actor2.default('Will Smith', 52);
  var otherCast = [new _Actor2.default('Paul Winfield', 50), new _Actor2.default('Michael Biehn', 50), new _Actor2.default('Linda Hamilton', 50)];
  var moreCast = [new _Actor2.default('Bruce Willis', 62), new _Actor2.default('Jason Statham', 49)];
  var iceAge = new _Movie2.default('Ice Age', 2008, 90); //global, to use it in other test cases

  iceAge.addCast(arnold);
  console.log(iceAge.cast);

  iceAge.addCast(otherCast);
  console.log(iceAge.cast);
};

},{"./Actor.js":1,"./Logger.js":3,"./Movie.js":4}]},{},[5]);
