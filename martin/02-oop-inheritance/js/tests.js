import "Social";
import "Actor";
import "Movie";
import "Logger";
/*those are several individual test for many exercises implemented for 
the topic 02, you can run all of them at the same time, no problem*/
//exer5 test
let terminator = new Movie('Terminator', 1984, 90);
let logger = new Logger();
terminator.on('play', logger.log);
terminator.play();
//exer 6 test
var starWars = new Movie("Star Wars", 1977, 121);
Object.assign(starWars, Social);
starWars.like("Martin");
starWars.share("Ernesto");
//exer 7 test
let arnold = new Actor("Arnold Schwarzenegger", 69);
let sylvester = new Actor("Sylvester Stallone", 70);
let jack = new Actor("Jack Nicholson", 79);
//exer 8 test
let terminatorI = new Movie('Terminator I', 1985, 60);
let arnoldS = new Actor('Arnold Schwarzenegger', 50);
let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];
terminatorI.addCast(arnoldS);
terminatorI.addCast(otherCast);
