
class EventEmitter {

  constructor() {
    this.listeners = new Map();
  }

  /**
   * isFunction - indicates if a variable is a function
   *
   * @param  {object} obj the object to be verified.
   * @return {boolean}     Result of object verification
   */
  isFunction(obj) {
    return typeof obj == 'function';
  }


  /**
   * on - Suscribes an object
   *
   * @param  {string} label    Type of notificiation listener will receive
   * @param  {function} callback Function to invoke when event is emitted
   */
  on(label,callback) {
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(callback);
  }


  /**
   * off - Unsuscribes an object
   *
   * @param  {type} label    Type of notificiation listener will receive
   * @param  {type} callback Function to invoke when event is emitted
   */
  off(label,callback) {
    let listener = this.listeners.get(label),index;

    if(listeners && listeners.length){
      index = listeners.reduce((i, listener, index) => {
          return (isFunction(listener) && listener === callback) ?
              i = index :
              i;
      }, -1);

      if(index > -1) {
          listeners.splice(index,1);
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
  emit(label, ...args) {
    let listeners = this.listeners.get(label);

    if(listeners && listeners.length){
      listeners.forEach((listener) => {
        listener(...args);
      });
      return true;
    }
    return false;
  }

}

module.exports = EventEmitter;
