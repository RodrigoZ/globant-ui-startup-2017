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