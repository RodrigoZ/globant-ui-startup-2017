"use strict";

var _Logger = require("./Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

var _Actor = require("./Actor.js");

var _Actor2 = _interopRequireDefault(_Actor);

var _Movie = require("./Movie.js");

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  testEx4();
  testEx5();
  testEx6();
  testEx8();
};

var testEx4 = function testEx4() {
  console.log("Test exercise 4");
  var Sherlock = new _Movie2.default('Sherlock', 2012, 120); //global, to use it in other test cases
  Sherlock.play();
  Sherlock.pause();
  Sherlock.resume();
};

var testEx5 = function testEx5() {
  console.log("Test exercise 5");
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

  iceAge.addCast(arnold);
  console.log(iceAge.cast);

  iceAge.addCast(otherCast);
  console.log(iceAge.cast);
};