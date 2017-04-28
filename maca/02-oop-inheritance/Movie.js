"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = require("./EventEmitter.js");

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Exercise 4

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