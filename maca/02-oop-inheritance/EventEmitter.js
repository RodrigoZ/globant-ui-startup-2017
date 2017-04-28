'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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