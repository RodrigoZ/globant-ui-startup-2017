/**
 * 
 * 
 * @class EventEmitter
 * A class that implements an Observer Pattern, it Subscribes, emits, and unsubscribes
 * from events.
 */
class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(event, listener) {
        if (typeof listener != "function") {
            throw new TypeError()
        }
        var listeners = this.events[event] || (this.events[event] = [])
        if (listeners.indexOf(listener) != -1) {
            console.log("The listener is already subscribed ");
        }
        this.events[event].push(listener);
    }

    off(event, listener) {
        if (typeof listener != "function") {
            throw new TypeError()
        }
        var listeners = this.events[event]
        if (!listeners || !listeners.length) {
            console.log("The event array is empty");
            return false;
        }
        var indexOfListener = listeners.indexOf(listener)
        if (indexOfListener == -1) {
            console.log("The listener is not subscribed already");
            return false;
        }
        this.events[event].splice(indexOfListener, 1)
        return true;
    }


    emit(event, ...args) {
        let listeners = this.events[event];
        if (!listeners || !listeners.length) {
            console.log("The event array is empty");
            return false;
        }
        listeners.forEach((listener) => {
            listener(...args);
        });
        return true;
    }

    once(event, listener) {
        var eventsInstance = this
        function onceCallback() {
            eventsInstance.off(event, onceCallback)
            listener.apply(null, arguments)
        }
        this.on(event, onceCallback)
    }
}
module.exports = EventEmitter;