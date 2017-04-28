import EventEmitter from './EventEmitter';
import Social from './Social';
/*
* Class Movie, extends from EventEmitter and Social.
* input: title, year, duration
*/
class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        Object.assign(this, Social);
        this.cast = [];
    }

    /*
    * Add's an object Actor or array of object's Actors.
    * input: newCast
    */
    addCast(newCast) {
        if (newCast.constructor === Array) {
            this.cast.push.apply(this.cast, newCast);
        } else {
            this.cast.push(newCast);
        }
    }

    /*
    * Publish (or Emits) the play event.
    */
    play() {
        this.emit("play");
    }

    /*
    * Publish (or Emits) the pause event.
    */
    pause() {
        this.emit("pause");
    }

    /*
    * Publish (or Emits) the resume event.
    */
    resume() {
        this.emit("resume");
    }
}

module.exports = Movie;
