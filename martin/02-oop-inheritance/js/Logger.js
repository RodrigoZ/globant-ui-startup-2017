'use strict';
/*
 *Exercise 5
 * @class Logger */
class Logger {
  constructor() {}
    /*
     * @param {string} info 
     * 
     * @memberOf Logger
     */
  log(info) {
    console.log(`The ${info} has been emmited`);
  }
}

export { Logger }