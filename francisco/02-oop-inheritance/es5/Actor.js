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