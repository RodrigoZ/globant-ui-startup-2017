import Actor from "./Actor";
import Movie from "./Movie";
import Logger from "./Logger";

let terminator = new Movie('Terminator I', 1985, 60);
let arnold = new Actor('Arnold Schwarzenegger', 50);
let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(otherCast);
console.log(terminator.cast);

let logger = new Logger();
terminator.on('play', logger.log);
terminator.play();
