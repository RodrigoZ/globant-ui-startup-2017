class Logger {

  constructor() {}

  /**
   * log - Displays on console the name of the emitted event.
   *
   * @param  {string} info The name of the emitted event
   */
  log(info) {
    console.log("The " + info + " event has been emitted.");
  }
}

module.exports = Logger;
