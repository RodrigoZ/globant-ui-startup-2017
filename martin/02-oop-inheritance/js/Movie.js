'use strict';
import { EventEmitter } from "EventEmitter";
/*
 *Exercise 4
 *@constructor
 *@param {string} title - the movie title
 *@param {string} year - the movie release
 *@param {string} duration - the movie duration
 *
 * @class Movie
 * @extends {EventEmitter}
 */
class Movie extends EventEmitter {
  constructor(title, year, duration) {
      super()
      this.title = title
      this.year = year
      this.duration = duration
      this.actors = [] //to use in 
    }
    /** @memberOf Movie */
  play() { //emit indirectly an event
      this.emit("play");
    }
    /** @memberOf Movie */
  pause() {
      this.emit("pause");
    }
    /** @memberOf Movie */
  resume() {
      this.emit("resume");
    }
    /*
     * @param {string} actor_name 
     * 
     * @memberOf Movie
     */
  addCast(actor_name) {
    if (actor_name instanceof Array) { //is an array
      for (let i = 0; i < actor_name.length; i++) {
        this.actors.push(actor_name[i]);
      }
    } else if (typeof actor_name === 'object') { //is an object
      this.actors.push(actor_name);
    } else console.error("the argument is not and object or an array");
  }
}

export { Movie }