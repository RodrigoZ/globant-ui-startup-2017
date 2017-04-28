(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
* Class Actor
* input: name, age
*/
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};

module.exports = Actor;

},{}],2:[function(require,module,exports){
/* Class EventEmiter is used to store callbacks the later will be 
 * used with emit
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventEmitter = (function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    /*
    * Emit the callback's associated with the event.
    * input: event
    */

    _createClass(EventEmitter, [{
        key: 'emit',
        value: function emit(event) {
            if (this.events[event]) {
                /* it runs in all the events called as event */
                this.events[event].forEach(function (i) {
                    i.call(this, event);
                });
            } else {
                console.error('Evento desconocido');
            }
        }

        /*
        * Stores the event with the callback in events.
        * input: event, callback
        */
    }, {
        key: 'on',
        value: function on(event, callback) {
            if (this.events[event] === undefined) {
                this.events[event] = [];
            }
            this.events[event].push(callback);
        }

        /*
        * Takes out the callback associated with the callback.
        * input: event, callback
        */
    }, {
        key: 'off',
        value: function off(event, callback) {
            this.events[event];
            if (this.events[event] === undefined) {
                console.error('Evento desconocido');
            } else {
                this.events[event] = this.events[event].filter(function (item) {
                    return item !== callback;
                });
            }
        }
    }]);

    return EventEmitter;
})();

module.exports = EventEmitter;

},{}],3:[function(require,module,exports){
/*
* Class Logger
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

        /*
        * Shows the info in the console.
        * input: info
        */
        value: function log(info) {
            console.log("The " + info + " event is playing");
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

var _Social = require('./Social');

var _Social2 = _interopRequireDefault(_Social);

/*
* Class Movie, extends from EventEmitter and Social.
* input: title, year, duration
*/

var Movie = (function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        _get(Object.getPrototypeOf(Movie.prototype), 'constructor', this).call(this);
        this.title = title;
        this.year = year;
        this.duration = duration;
        Object.assign(this, _Social2['default']);
        this.cast = [];
    }

    /*
    * Add's an object Actor or array of object's Actors.
    * input: newCast
    */

    _createClass(Movie, [{
        key: 'addCast',
        value: function addCast(newCast) {
            if (newCast.constructor === Array) {
                this.cast.push.apply(this.cast, newCast);
            } else {
                this.cast.push(newCast);
            }
        }

        /*
        * Publish (or Emits) the play event.
        */
    }, {
        key: 'play',
        value: function play() {
            this.emit("play");
        }

        /*
        * Publish (or Emits) the pause event.
        */
    }, {
        key: 'pause',
        value: function pause() {
            this.emit("pause");
        }

        /*
        * Publish (or Emits) the resume event.
        */
    }, {
        key: 'resume',
        value: function resume() {
            this.emit("resume");
        }
    }]);

    return Movie;
})(_EventEmitter3['default']);

module.exports = Movie;

},{"./EventEmitter":2,"./Social":5}],5:[function(require,module,exports){
/*
* Object Social
*/
"use strict";

var Social = {

    /*
    * Shows the friendName in the console.
    * input: friendName
    */
    share: function share(friendName) {
        console.log("Share " + this.title + " name with " + friendName);
    },

    /*
    * Shows the friendName in the console.
    * input: friendName
    */
    like: function like(friendName) {
        console.log("Like " + this.title + " name with " + friendName);
    }
};

module.exports = Social;

},{}],6:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _Actor = require("./Actor");

var _Actor2 = _interopRequireDefault(_Actor);

var _Movie = require("./Movie");

var _Movie2 = _interopRequireDefault(_Movie);

var _Logger = require("./Logger");

var _Logger2 = _interopRequireDefault(_Logger);

var terminator = new _Movie2["default"]('Terminator I', 1985, 60);
var arnold = new _Actor2["default"]('Arnold Schwarzenegger', 50);
var otherCast = [new _Actor2["default"]('Paul Winfield', 50), new _Actor2["default"]('Michael Biehn', 50), new _Actor2["default"]('Linda Hamilton', 50)];

terminator.addCast(arnold);
terminator.addCast(otherCast);
console.log(terminator.cast);

var logger = new _Logger2["default"]();
terminator.on('play', logger.log);
terminator.play();

},{"./Actor":1,"./Logger":3,"./Movie":4}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9sdWNhL3dvcmsvZ2xvYmFudC11aS1zdGFydHVwLTIwMTcvbHVjYS8wMi1vb3AtaW5oZXJpdGFuY2UvanMvQWN0b3IuanMiLCIvaG9tZS9sdWNhL3dvcmsvZ2xvYmFudC11aS1zdGFydHVwLTIwMTcvbHVjYS8wMi1vb3AtaW5oZXJpdGFuY2UvanMvRXZlbnRFbWl0dGVyLmpzIiwiL2hvbWUvbHVjYS93b3JrL2dsb2JhbnQtdWktc3RhcnR1cC0yMDE3L2x1Y2EvMDItb29wLWluaGVyaXRhbmNlL2pzL0xvZ2dlci5qcyIsIi9ob21lL2x1Y2Evd29yay9nbG9iYW50LXVpLXN0YXJ0dXAtMjAxNy9sdWNhLzAyLW9vcC1pbmhlcml0YW5jZS9qcy9Nb3ZpZS5qcyIsIi9ob21lL2x1Y2Evd29yay9nbG9iYW50LXVpLXN0YXJ0dXAtMjAxNy9sdWNhLzAyLW9vcC1pbmhlcml0YW5jZS9qcy9Tb2NpYWwuanMiLCIvaG9tZS9sdWNhL3dvcmsvZ2xvYmFudC11aS1zdGFydHVwLTIwMTcvbHVjYS8wMi1vb3AtaW5oZXJpdGFuY2UvanMvZnVuY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0lNLEtBQUssR0FFSSxTQUZULEtBQUssQ0FFSyxJQUFJLEVBQUUsR0FBRyxFQUFFOzBCQUZyQixLQUFLOztBQUdILFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0NBQ2xCOztBQUdMLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7SUNUakIsWUFBWTtBQUNILGFBRFQsWUFBWSxHQUNBOzhCQURaLFlBQVk7O0FBRVYsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7Ozs7aUJBSEMsWUFBWTs7ZUFTVixjQUFDLEtBQUssRUFBRTtBQUNSLGdCQUFJ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QUcsQ0FBQyxDQUFDO0FBQ2xDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuKiBDbGFzcyBBY3RvclxuKiBpbnB1dDogbmFtZSwgYWdlXG4qL1xuY2xhc3MgQWN0b3Ige1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYWdlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWdlID0gYWdlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3RvcjtcbiIsIi8qIENsYXNzIEV2ZW50RW1pdGVyIGlzIHVzZWQgdG8gc3RvcmUgY2FsbGJhY2tzIHRoZSBsYXRlciB3aWxsIGJlIFxuICogdXNlZCB3aXRoIGVtaXRcbiAqL1xuY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICogRW1pdCB0aGUgY2FsbGJhY2sncyBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxuICAgICogaW5wdXQ6IGV2ZW50XG4gICAgKi9cbiAgICBlbWl0KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICAgIC8qIGl0IHJ1bnMgaW4gYWxsIHRoZSBldmVudHMgY2FsbGVkIGFzIGV2ZW50ICovXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbihpKXtcbiAgICAgICAgICAgICAgICBpLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0V2ZW50byBkZXNjb25vY2lkbycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAqIFN0b3JlcyB0aGUgZXZlbnQgd2l0aCB0aGUgY2FsbGJhY2sgaW4gZXZlbnRzLlxuICAgICogaW5wdXQ6IGV2ZW50LCBjYWxsYmFja1xuICAgICovXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrKSB7ICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLypcbiAgICAqIFRha2VzIG91dCB0aGUgY2FsbGJhY2sgYXNzb2NpYXRlZCB3aXRoIHRoZSBjYWxsYmFjay5cbiAgICAqIGlucHV0OiBldmVudCwgY2FsbGJhY2tcbiAgICAqL1xuICAgIG9mZihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgICBpZih0aGlzLmV2ZW50c1tldmVudF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXZlbnRvIGRlc2Nvbm9jaWRvJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0uZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbiIsIi8qXG4qIENsYXNzIExvZ2dlclxuKi9cbmNsYXNzIExvZ2dlciB7XG5cbiAgICAvKlxuICAgICogU2hvd3MgdGhlIGluZm8gaW4gdGhlIGNvbnNvbGUuXG4gICAgKiBpbnB1dDogaW5mb1xuICAgICovXG4gICAgbG9nKGluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgXCIgKyBpbmZvICsgXCIgZXZlbnQgaXMgcGxheWluZ1wiKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nZ2VyO1xuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgU29jaWFsIGZyb20gJy4vU29jaWFsJztcbi8qXG4qIENsYXNzIE1vdmllLCBleHRlbmRzIGZyb20gRXZlbnRFbWl0dGVyIGFuZCBTb2NpYWwuXG4qIGlucHV0OiB0aXRsZSwgeWVhciwgZHVyYXRpb25cbiovXG5jbGFzcyBNb3ZpZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHllYXIsIGR1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIFNvY2lhbCk7XG4gICAgICAgIHRoaXMuY2FzdCA9IFtdO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBBZGQncyBhbiBvYmplY3QgQWN0b3Igb3IgYXJyYXkgb2Ygb2JqZWN0J3MgQWN0b3JzLlxuICAgICogaW5wdXQ6IG5ld0Nhc3RcbiAgICAqL1xuICAgIGFkZENhc3QobmV3Q2FzdCkge1xuICAgICAgICBpZiAobmV3Q2FzdC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FzdC5wdXNoLmFwcGx5KHRoaXMuY2FzdCwgbmV3Q2FzdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhc3QucHVzaChuZXdDYXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKiBQdWJsaXNoIChvciBFbWl0cykgdGhlIHBsYXkgZXZlbnQuXG4gICAgKi9cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLmVtaXQoXCJwbGF5XCIpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBQdWJsaXNoIChvciBFbWl0cykgdGhlIHBhdXNlIGV2ZW50LlxuICAgICovXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuZW1pdChcInBhdXNlXCIpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBQdWJsaXNoIChvciBFbWl0cykgdGhlIHJlc3VtZSBldmVudC5cbiAgICAqL1xuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwicmVzdW1lXCIpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3ZpZTtcbiIsIi8qXG4qIE9iamVjdCBTb2NpYWxcbiovXG5sZXQgU29jaWFsID0ge1xuXG4gICAgLypcbiAgICAqIFNob3dzIHRoZSBmcmllbmROYW1lIGluIHRoZSBjb25zb2xlLlxuICAgICogaW5wdXQ6IGZyaWVuZE5hbWVcbiAgICAqL1xuICAgIHNoYXJlKGZyaWVuZE5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaGFyZSBcIiArIHRoaXMudGl0bGUgKyBcIiBuYW1lIHdpdGggXCIgKyBmcmllbmROYW1lKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAqIFNob3dzIHRoZSBmcmllbmROYW1lIGluIHRoZSBjb25zb2xlLlxuICAgICogaW5wdXQ6IGZyaWVuZE5hbWVcbiAgICAqL1xuICAgIGxpa2UoZnJpZW5kTmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxpa2UgXCIgKyB0aGlzLnRpdGxlICsgXCIgbmFtZSB3aXRoIFwiICsgZnJpZW5kTmFtZSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2lhbDtcbiIsImltcG9ydCBBY3RvciBmcm9tIFwiLi9BY3RvclwiO1xuaW1wb3J0IE1vdmllIGZyb20gXCIuL01vdmllXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xuXG5sZXQgdGVybWluYXRvciA9IG5ldyBNb3ZpZSgnVGVybWluYXRvciBJJywgMTk4NSwgNjApO1xubGV0IGFybm9sZCA9IG5ldyBBY3RvcignQXJub2xkIFNjaHdhcnplbmVnZ2VyJywgNTApO1xubGV0IG90aGVyQ2FzdCA9IFtcbiAgbmV3IEFjdG9yKCdQYXVsIFdpbmZpZWxkJywgNTApLFxuICBuZXcgQWN0b3IoJ01pY2hhZWwgQmllaG4nLCA1MCksXG4gIG5ldyBBY3RvcignTGluZGEgSGFtaWx0b24nLCA1MClcbl07XG5cbnRlcm1pbmF0b3IuYWRkQ2FzdChhcm5vbGQpO1xudGVybWluYXRvci5hZGRDYXN0KG90aGVyQ2FzdCk7XG5jb25zb2xlLmxvZyh0ZXJtaW5hdG9yLmNhc3QpO1xuXG5sZXQgbG9nZ2VyID0gbmV3IExvZ2dlcigpO1xudGVybWluYXRvci5vbigncGxheScsIGxvZ2dlci5sb2cpO1xudGVybWluYXRvci5wbGF5KCk7XG4iXX0=
