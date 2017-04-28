'use strict';
/*
 * Exercise 3
 * 
 * @class EventEmitter
 */
class EventEmitter {
  /*
   * Creates an instance of EventEmitter.
   * 
   * @memberOf EventEmitter
   */
  constructor() {
      this.events = {} //this is an object.
        //can use '_events' instead of 'events' to indicate that it should 
        //be trated as a private property.
    }
    /*
     * @param {string} event 
     * @param {function} callback 
     * 
     * @memberOf EventEmitter
     */
  on(event, callback) {
      //check if the event do not exists as an object.
      if (typeof this.events[event] !== 'object') {
        this.events[event] = []; //this is an empty array;
        console.log("an event has been pushed"); //this is just to SEE the advance in console.
      }
      this.events[event].push(callback); //introduce the callback into the array
    }
    /*
     * @param {string} event 
     * 
     * @memberOf EventEmitter
     */
  emit(event) {
      if (this.events[event]) { //check if it exists.
        console.log(typeof this.events[event]);
        this.events[event].forEach(function(element) {
          element.call(this, event); //add event info to use in the logger
        })
      } else console.error("uknown event(call .on first)");
      //when a method is executed, emmit it. Example: Movie.play(); <= call emit;
    }
    /*
     * @param {string} event 
     * @param {function} callback 
     * 
     * @memberOf EventEmitter
     */
  off(event, callback) { //we pass the event and the function/method to remove from the events array.
    if (typeof this.events[event] === 'object') { //check if the event exists.
      //search every event in the array until match, and remember the key location. 
      let i = 0;
      let length = this.events[event].length;
      let found = false;

      while (i < length && !found) {
        if (this.events[event][i] === callback) {
          //having the location in the array, remove the callback.
          this.events[event].splice(i, 1);
          found = true;         
        } else 
          console.error("the 'callback' cannot be found");
        i++;
      }
    }
  }
}

export { EventEmitter }
