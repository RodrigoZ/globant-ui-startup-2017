/* Class EventEmiter is used to store callbacks the later will be 
 * used with emit
 */
class EventEmitter {
    constructor() {
        this.events = {};
    }

    /*
    * Emit the callback's associated with the event.
    * input: event
    */
    emit(event) {
        if (this.events[event]) {
            /* it runs in all the events called as event */
            this.events[event].forEach(function(i){
                i.call(this, event);
            })
        } else {
            console.error('Evento desconocido');
        }
    }

    /*
    * Stores the event with the callback in events.
    * input: event, callback
    */
    on(event, callback) {              
        if (this.events[event] === undefined) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    /*
    * Takes out the callback associated with the callback.
    * input: event, callback
    */
    off(event, callback) {
        this.events[event];
        if(this.events[event] === undefined) {
            console.error('Evento desconocido');
        } else {
            this.events[event] = this.events[event].filter(item => item !== callback);
        }
    }
}

module.exports = EventEmitter;
