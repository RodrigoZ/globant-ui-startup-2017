import EventEmitter from './EventEmitter'
import Movie from './Movie';
import Logger from './Logger';
import Actor from './Actor';

window.addEventListener("load", function () {
    tryMovie();
    tryEventEmitter();
    tryTogether();
    trySocial();
    tryActors();
})
/**
 * The Folowwing functions are Tests for the classes implemented previously.
 * 
 */
function tryMovie() {
    var movie1 = new Movie("Toy Story", 1992, 180);
    var movie2 = new Movie("The Shining", 1980, 120);
    var movie3 = new Movie("Harry Potter", 2004, 140);
    movie1.play();
    movie2.pause();
    movie3.resume();
    console.log(movie1.tostring());
    console.log(movie2.tostring());
    console.log(movie3.tostring());
}

function tryEventEmitter() {
    var emitter = new EventEmitter();
    var list1 = function (name) {
        console.log('Hello, ' + name + '!');
    };
    let list2 = function (name) {
        console.log('World, ' + name + '!');
    };
    emitter.on('TheEvent', list1);
    emitter.on('TheEvent', list2);
    emitter.emit('TheEvent', "Test");
}

function tryTogether() {
    let terminator = new Movie('Terminator', 1984, 90);
    let logger = new Logger();
    terminator.on('resume', logger.log);
    terminator.resume();
}
function trySocial() {
    let Social = {
        age: 30,
        share: function (friendName) {
            let output = `Share ${this.title} with ${friendName}`;
            console.log(output);
        },
        like: function (friendName) {
            let output = `${friendName} likes ${this.title}`;
            console.log(output);
        }
    };
    let movie = new Movie("The Shining", 1980, 120);
    Object.assign(movie, Social);
    movie.share('Jorge');
    movie.like('Pedro')
}
function tryActors() {
    let terminator = new Movie('Terminator I', 1985, 60);
    let arnold = new Actor('Arnold Schwarzenegger', 50);
    let otherCast = [
        new Actor('Paul Winfield', 50),
        new Actor('Michael Biehn', 50),
        new Actor('Linda Hamilton', 50)
    ];

    terminator.addCast(arnold);
    terminator.addCast(otherCast);
    console.log(terminator.tostring())
}