import Movie from "./classes/Movie.es6";
import Actor from "./classes/Actor.es6";
import Logger from "./classes/Logger.es6";

let Social =  {
  like: function(friendName){
    console.log(friendName + " likes " + this.title);
  },
  share: function(friendName){
    console.log(friendName + " share " + this.title);
  }
}

let logger = new Logger();
let divergente = new Movie("Divergente",2014,139);

Object.assign(divergente,Social);

divergente.like("Francisco");
divergente.share("Francisco");


let shailene = new Actor("Shailene Woodley",25);
let otherCast = [
  new Actor("Theo James",32),
  new Actor("Jai Courtney", 31)
]
