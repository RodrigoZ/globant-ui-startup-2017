(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};

module.exports = Actor;

},{}],2:[function(require,module,exports){
/**
 * 
 * 
 * @class EventEmitter
 * A class that implements an Observer Pattern, it Subscribes, emits, and unsubscribes
 * from events.
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = (function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    _createClass(EventEmitter, [{
        key: "on",
        value: function on(event, listener) {
            if (typeof listener != "function") {
                throw new TypeError();
            }
            var listeners = this.events[event] || (this.events[event] = []);
            if (listeners.indexOf(listener) != -1) {
                console.log("The listener is already subscribed ");
            }
            this.events[event].push(listener);
        }
    }, {
        key: "off",
        value: function off(event, listener) {
            if (typeof listener != "function") {
                throw new TypeError();
            }
            var listeners = this.events[event];
            if (!listeners || !listeners.length) {
                console.log("The event array is empty");
                return false;
            }
            var indexOfListener = listeners.indexOf(listener);
            if (indexOfListener == -1) {
                console.log("The listener is not subscribed already");
                return false;
            }
            this.events[event].splice(indexOfListener, 1);
            return true;
        }
    }, {
        key: "emit",
        value: function emit(event) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            var listeners = this.events[event];
            if (!listeners || !listeners.length) {
                console.log("The event array is empty");
                return false;
            }
            listeners.forEach(function (listener) {
                listener.apply(undefined, args);
            });
            return true;
        }
    }, {
        key: "once",
        value: function once(event, listener) {
            var eventsInstance = this;
            function onceCallback() {
                eventsInstance.off(event, onceCallback);
                listener.apply(null, arguments);
            }
            this.on(event, onceCallback);
        }
    }]);

    return EventEmitter;
})();

module.exports = EventEmitter;

},{}],3:[function(require,module,exports){

/**
 * 
 * 
 * @class Logger
 * Class for exercise 6 it just log something in the console
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = (function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(info) {
            console.log(info);
        }
    }]);

    return Logger;
})();

module.exports = Logger;

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _EventEmitter2 = require('./EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _Actor = require('./Actor');

var _Actor2 = _interopRequireDefault(_Actor);

/**
 * 
 * 
 * @class Movie
 * @extends {EventEmitter}
 * A Class that extends event emitter, it has the Clasic Movie attributes, and emits an event
 * when play, resume and pause
 */

var Movie = (function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        _get(Object.getPrototypeOf(Movie.prototype), 'constructor', this).call(this);
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    _createClass(Movie, [{
        key: 'play',
        value: function play() {
            this.emit("play", "The 'play' event has been emitted");
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.emit("pause", "The 'Pause' event has been emitted");
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.emit("resume", "The 'Resume' event has been emitted");
        }
    }, {
        key: 'addCast',
        value: function addCast(actors) {
            if (Array.isArray(actors)) {
                for (var i = 0; i < actors.length; i++) {
                    if (actors[i] instanceof _Actor2['default']) {
                        this.cast.push(actors[i]);
                    }
                }
            } else {
                if (actors instanceof _Actor2['default']) {
                    this.cast.push(actors);
                }
            }
        }
    }, {
        key: 'castToString',
        value: function castToString() {
            var str = "Cast: ";
            for (var i = 0; i < this.cast.length; i++) {
                str += '\n\tName: ' + this.cast[i].name + ', Age: ' + this.cast[i].age;
            }
            return str;
        }
    }, {
        key: 'tostring',
        value: function tostring() {
            var str = "\nMovie title: " + this.title + "\nPremiere Year: " + this.year + "\nDuration: " + this.duration + " minutes\n" + this.castToString();
            return str;
        }
    }]);

    return Movie;
})(_EventEmitter3['default']);

module.exports = Movie;

},{"./Actor":1,"./EventEmitter":2}],5:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventEmitter = require('./EventEmitter');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Movie = require('./Movie');

var _Movie2 = _interopRequireDefault(_Movie);

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _Actor = require('./Actor');

var _Actor2 = _interopRequireDefault(_Actor);

window.addEventListener("load", function () {
    tryMovie();
    tryEventEmitter();
    tryTogether();
    trySocial();
    tryActors();
});
/**
 * The Folowwing functions are Tests for the classes implemented previously.
 * 
 */
function tryMovie() {
    var movie1 = new _Movie2['default']("Toy Story", 1992, 180);
    var movie2 = new _Movie2['default']("The Shining", 1980, 120);
    var movie3 = new _Movie2['default']("Harry Potter", 2004, 140);
    movie1.play();
    movie2.pause();
    movie3.resume();
    console.log(movie1.tostring());
    console.log(movie2.tostring());
    console.log(movie3.tostring());
}

function tryEventEmitter() {
    var emitter = new _EventEmitter2['default']();
    var list1 = function list1(name) {
        console.log('Hello, ' + name + '!');
    };
    var list2 = function list2(name) {
        console.log('World, ' + name + '!');
    };
    emitter.on('TheEvent', list1);
    emitter.on('TheEvent', list2);
    emitter.emit('TheEvent', "Test");
}

function tryTogether() {
    var terminator = new _Movie2['default']('Terminator', 1984, 90);
    var logger = new _Logger2['default']();
    terminator.on('resume', logger.log);
    terminator.resume();
}
function trySocial() {
    var Social = {
        age: 30,
        share: function share(friendName) {
            var output = 'Share ' + this.title + ' with ' + friendName;
            console.log(output);
        },
        like: function like(friendName) {
            var output = friendName + ' likes ' + this.title;
            console.log(output);
        }
    };
    var movie = new _Movie2['default']("The Shining", 1980, 120);
    Object.assign(movie, Social);
    movie.share('Jorge');
    movie.like('Pedro');
}
function tryActors() {
    var terminator = new _Movie2['default']('Terminator I', 1985, 60);
    var arnold = new _Actor2['default']('Arnold Schwarzenegger', 50);
    var otherCast = [new _Actor2['default']('Paul Winfield', 50), new _Actor2['default']('Michael Biehn', 50), new _Actor2['default']('Linda Hamilton', 50)];

    terminator.addCast(arnold);
    terminator.addCast(otherCast);
    console.log(terminator.tostring());
}

},{"./Actor":1,"./EventEmitter":2,"./Logger":3,"./Movie":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9GYWN1bmRvIFN1YXJlei9Eb2N1bWVudHMvR2l0SHViL2dsb2JhbnQtdWktc3RhcnR1cC0yMDE3L2ZhY3VuZG8vMDItb29wLWluaGVyaXRhbmNlL0FjdG9yLmpzIiwiQzovVXNlcnMvRmFjdW5kbyBTdWFyZXovRG9jdW1lbnRzL0dpdEh1Yi9nbG9iYW50LXVpLXN0YXJ0dXAtMjAxNy9mYWN1bmRvLzAyLW9vcC1pbmhlcml0YW5jZS9FdmVudEVtaXR0ZXIuanMiLCJDOi9Vc2Vycy9GYWN1bmRvIFN1YXJlei9Eb2N1bWVudHMvR2l0SHViL2dsb2JhbnQtdWktc3RhcnR1cC0yMDE3L2ZhY3VuZG8vMDItb29wLWluaGVyaXRhbmNlL0xvZ2dlci5qcyIsIkM6L1VzZXJzL0ZhY3VuZG8gU3VhcmV6L0RvY3VtZW50cy9HaXRIdWIvZ2xvYmFudC11aS1zdGFydHVwLTIwMTcvZmFjdW5kby8wMi1vb3AtaW5oZXJpdGFuY2UvTW92aWUuanMiLCJDOi9Vc2Vycy9GYWN1bmRvIFN1YXJlei9Eb2N1bWVudHMvR2l0SHViL2dsb2JhbnQtdWktc3RhcnR1cC0yMDE3L2ZhY3VuZG8vMDItb29wLWluaGVyaXRhbmNlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQ0FNLEtBQUssR0FDSSxTQURULEtBQUssQ0FDSyxJQUFJLEVBQUUsR0FBRyxFQUFFOzBCQURyQixLQUFLOztBQUVILFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0NBQ2xCOztBQUVMLE1BQU0sQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDQ2YsWUFBWTtBQUNILGFBRFQsWUFBWSxHQUNBOzhCQURaLFlBQVk7O0FBRVYsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7S0FDbkI7O2lCQUhD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QUVGLGNBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsY0FBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QixXQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0NBQ3JDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIEFjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHM9QWN0b3I7IiwiLyoqXHJcbiAqIFxyXG4gKiBcclxuICogQGNsYXNzIEV2ZW50RW1pdHRlclxyXG4gKiBBIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBhbiBPYnNlcnZlciBQYXR0ZXJuLCBpdCBTdWJzY3JpYmVzLCBlbWl0cywgYW5kIHVuc3Vic2NyaWJlc1xyXG4gKiBmcm9tIGV2ZW50cy5cclxuICovXHJcbmNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9XHJcbiAgICB9XHJcblxyXG4gICAgb24oZXZlbnQsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50c1tldmVudF0gfHwgKHRoaXMuZXZlbnRzW2V2ZW50XSA9IFtdKVxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgIT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgbGlzdGVuZXIgaXMgYWxyZWFkeSBzdWJzY3JpYmVkIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihldmVudCwgbGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuZXZlbnRzW2V2ZW50XVxyXG4gICAgICAgIGlmICghbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGV2ZW50IGFycmF5IGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbmRleE9mTGlzdGVuZXIgPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcclxuICAgICAgICBpZiAoaW5kZXhPZkxpc3RlbmVyID09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGxpc3RlbmVyIGlzIG5vdCBzdWJzY3JpYmVkIGFscmVhZHlcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnNwbGljZShpbmRleE9mTGlzdGVuZXIsIDEpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgICAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5ldmVudHNbZXZlbnRdO1xyXG4gICAgICAgIGlmICghbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGV2ZW50IGFycmF5IGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgICAgICBsaXN0ZW5lciguLi5hcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xyXG4gICAgICAgIHZhciBldmVudHNJbnN0YW5jZSA9IHRoaXNcclxuICAgICAgICBmdW5jdGlvbiBvbmNlQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c0luc3RhbmNlLm9mZihldmVudCwgb25jZUNhbGxiYWNrKVxyXG4gICAgICAgICAgICBsaXN0ZW5lci5hcHBseShudWxsLCBhcmd1bWVudHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub24oZXZlbnQsIG9uY2VDYWxsYmFjaylcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjsiLCJcclxuLyoqXHJcbiAqIFxyXG4gKiBcclxuICogQGNsYXNzIExvZ2dlclxyXG4gKiBDbGFzcyBmb3IgZXhlcmNpc2UgNiBpdCBqdXN0IGxvZyBzb21ldGhpbmcgaW4gdGhlIGNvbnNvbGVcclxuICovXHJcbmNsYXNzIExvZ2dlciB7XHJcbiAgICBsb2coaW5mbykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzPUxvZ2dlcjsiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vRXZlbnRFbWl0dGVyJztcclxuaW1wb3J0IEFjdG9yIGZyb20gJy4vQWN0b3InXHJcbi8qKlxyXG4gKiBcclxuICogXHJcbiAqIEBjbGFzcyBNb3ZpZVxyXG4gKiBAZXh0ZW5kcyB7RXZlbnRFbWl0dGVyfVxyXG4gKiBBIENsYXNzIHRoYXQgZXh0ZW5kcyBldmVudCBlbWl0dGVyLCBpdCBoYXMgdGhlIENsYXNpYyBNb3ZpZSBhdHRyaWJ1dGVzLCBhbmQgZW1pdHMgYW4gZXZlbnRcclxuICogd2hlbiBwbGF5LCByZXN1bWUgYW5kIHBhdXNlXHJcbiAqL1xyXG5jbGFzcyBNb3ZpZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgeWVhciwgZHVyYXRpb24pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmNhc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5KCkge1xyXG4gICAgICAgIHRoaXMuZW1pdChcInBsYXlcIiwgXCJUaGUgJ3BsYXknIGV2ZW50IGhhcyBiZWVuIGVtaXR0ZWRcIilcclxuICAgIH1cclxuICAgIHBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMuZW1pdChcInBhdXNlXCIsIFwiVGhlICdQYXVzZScgZXZlbnQgaGFzIGJlZW4gZW1pdHRlZFwiKVxyXG4gICAgfVxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICAgIHRoaXMuZW1pdChcInJlc3VtZVwiLCBcIlRoZSAnUmVzdW1lJyBldmVudCBoYXMgYmVlbiBlbWl0dGVkXCIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZENhc3QoYWN0b3JzKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWN0b3JzKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdG9yc1tpXSBpbnN0YW5jZW9mIEFjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXN0LnB1c2goYWN0b3JzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFjdG9ycyBpbnN0YW5jZW9mIEFjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhc3QucHVzaChhY3RvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzdFRvU3RyaW5nKCl7XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiQ2FzdDogXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3RyICs9ICBgXFxuXFx0TmFtZTogJHt0aGlzLmNhc3RbaV0ubmFtZX0sIEFnZTogJHt0aGlzLmNhc3RbaV0uYWdlfWAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcbiAgICB0b3N0cmluZygpIHtcclxuICAgICAgICBsZXQgc3RyID0gXCJcXG5Nb3ZpZSB0aXRsZTogXCIgKyB0aGlzLnRpdGxlICsgXCJcXG5QcmVtaWVyZSBZZWFyOiBcIiArIHRoaXMueWVhciArIFwiXFxuRHVyYXRpb246IFwiICsgdGhpcy5kdXJhdGlvbiArIFwiIG1pbnV0ZXNcXG5cIit0aGlzLmNhc3RUb1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IE1vdmllOyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9FdmVudEVtaXR0ZXInXHJcbmltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllJztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XHJcbmltcG9ydCBBY3RvciBmcm9tICcuL0FjdG9yJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0cnlNb3ZpZSgpO1xyXG4gICAgdHJ5RXZlbnRFbWl0dGVyKCk7XHJcbiAgICB0cnlUb2dldGhlcigpO1xyXG4gICAgdHJ5U29jaWFsKCk7XHJcbiAgICB0cnlBY3RvcnMoKTtcclxufSlcclxuLyoqXHJcbiAqIFRoZSBGb2xvd3dpbmcgZnVuY3Rpb25zIGFyZSBUZXN0cyBmb3IgdGhlIGNsYXNzZXMgaW1wbGVtZW50ZWQgcHJldmlvdXNseS5cclxuICogXHJcbiAqL1xyXG5mdW5jdGlvbiB0cnlNb3ZpZSgpIHtcclxuICAgIHZhciBtb3ZpZTEgPSBuZXcgTW92aWUoXCJUb3kgU3RvcnlcIiwgMTk5MiwgMTgwKTtcclxuICAgIHZhciBtb3ZpZTIgPSBuZXcgTW92aWUoXCJUaGUgU2hpbmluZ1wiLCAxOTgwLCAxMjApO1xyXG4gICAgdmFyIG1vdmllMyA9IG5ldyBNb3ZpZShcIkhhcnJ5IFBvdHRlclwiLCAyMDA0LCAxNDApO1xyXG4gICAgbW92aWUxLnBsYXkoKTtcclxuICAgIG1vdmllMi5wYXVzZSgpO1xyXG4gICAgbW92aWUzLnJlc3VtZSgpO1xyXG4gICAgY29uc29sZS5sb2cobW92aWUxLnRvc3RyaW5nKCkpO1xyXG4gICAgY29uc29sZS5sb2cobW92aWUyLnRvc3RyaW5nKCkpO1xyXG4gICAgY29uc29sZS5sb2cobW92aWUzLnRvc3RyaW5nKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cnlFdmVudEVtaXR0ZXIoKSB7XHJcbiAgICB2YXIgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHZhciBsaXN0MSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0hlbGxvLCAnICsgbmFtZSArICchJyk7XHJcbiAgICB9O1xyXG4gICAgbGV0IGxpc3QyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnV29ybGQsICcgKyBuYW1lICsgJyEnKTtcclxuICAgIH07XHJcbiAgICBlbWl0dGVyLm9uKCdUaGVFdmVudCcsIGxpc3QxKTtcclxuICAgIGVtaXR0ZXIub24oJ1RoZUV2ZW50JywgbGlzdDIpO1xyXG4gICAgZW1pdHRlci5lbWl0KCdUaGVFdmVudCcsIFwiVGVzdFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9nZXRoZXIoKSB7XHJcbiAgICBsZXQgdGVybWluYXRvciA9IG5ldyBNb3ZpZSgnVGVybWluYXRvcicsIDE5ODQsIDkwKTtcclxuICAgIGxldCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XHJcbiAgICB0ZXJtaW5hdG9yLm9uKCdyZXN1bWUnLCBsb2dnZXIubG9nKTtcclxuICAgIHRlcm1pbmF0b3IucmVzdW1lKCk7XHJcbn1cclxuZnVuY3Rpb24gdHJ5U29jaWFsKCkge1xyXG4gICAgbGV0IFNvY2lhbCA9IHtcclxuICAgICAgICBhZ2U6IDMwLFxyXG4gICAgICAgIHNoYXJlOiBmdW5jdGlvbiAoZnJpZW5kTmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gYFNoYXJlICR7dGhpcy50aXRsZX0gd2l0aCAke2ZyaWVuZE5hbWV9YDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpa2U6IGZ1bmN0aW9uIChmcmllbmROYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBgJHtmcmllbmROYW1lfSBsaWtlcyAke3RoaXMudGl0bGV9YDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGV0IG1vdmllID0gbmV3IE1vdmllKFwiVGhlIFNoaW5pbmdcIiwgMTk4MCwgMTIwKTtcclxuICAgIE9iamVjdC5hc3NpZ24obW92aWUsIFNvY2lhbCk7XHJcbiAgICBtb3ZpZS5zaGFyZSgnSm9yZ2UnKTtcclxuICAgIG1vdmllLmxpa2UoJ1BlZHJvJylcclxufVxyXG5mdW5jdGlvbiB0cnlBY3RvcnMoKSB7XHJcbiAgICBsZXQgdGVybWluYXRvciA9IG5ldyBNb3ZpZSgnVGVybWluYXRvciBJJywgMTk4NSwgNjApO1xyXG4gICAgbGV0IGFybm9sZCA9IG5ldyBBY3RvcignQXJub2xkIFNjaHdhcnplbmVnZ2VyJywgNTApO1xyXG4gICAgbGV0IG90aGVyQ2FzdCA9IFtcclxuICAgICAgICBuZXcgQWN0b3IoJ1BhdWwgV2luZmllbGQnLCA1MCksXHJcbiAgICAgICAgbmV3IEFjdG9yKCdNaWNoYWVsIEJpZWhuJywgNTApLFxyXG4gICAgICAgIG5ldyBBY3RvcignTGluZGEgSGFtaWx0b24nLCA1MClcclxuICAgIF07XHJcblxyXG4gICAgdGVybWluYXRvci5hZGRDYXN0KGFybm9sZCk7XHJcbiAgICB0ZXJtaW5hdG9yLmFkZENhc3Qob3RoZXJDYXN0KTtcclxuICAgIGNvbnNvbGUubG9nKHRlcm1pbmF0b3IudG9zdHJpbmcoKSlcclxufSJdfQ==
