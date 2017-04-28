import EventEmitter from './EventEmitter';
import Actor from './Actor'
/**
 * 
 * 
 * @class Movie
 * @extends {EventEmitter}
 * A Class that extends event emitter, it has the Clasic Movie attributes, and emits an event
 * when play, resume and pause
 */
class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    play() {
        this.emit("play", "The 'play' event has been emitted")
    }
    pause() {
        this.emit("pause", "The 'Pause' event has been emitted")
    }
    resume() {
        this.emit("resume", "The 'Resume' event has been emitted")
    }
    
    addCast(actors) {
        if (Array.isArray(actors)) {
            for (let i = 0; i < actors.length; i++) {
                if (actors[i] instanceof Actor) {
                    this.cast.push(actors[i]);
                }
            }
        }
        else {
            if (actors instanceof Actor) {
                this.cast.push(actors);
            }
        }
    }
    castToString(){
        let str = "Cast: ";
        for (let i = 0; i < this.cast.length; i++) {
            str +=  `\n\tName: ${this.cast[i].name}, Age: ${this.cast[i].age}` }
            return str
    }
    tostring() {
        let str = "\nMovie title: " + this.title + "\nPremiere Year: " + this.year + "\nDuration: " + this.duration + " minutes\n"+this.castToString();
        return str
    }
}
module.exports = Movie;