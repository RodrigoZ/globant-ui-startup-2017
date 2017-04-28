import EventEmitter from "./EventEmitter.es6";

class Movie extends EventEmitter{

  constructor(title,year,duration){
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.actors = [];
  }

  play(){
    this.emit("play","Play");
  }

  pause() {
    this.emit("pause","Pause");
  }

  resume(){
    this.emit("resume","Resume");
  }

  addCast(cast){
    if(Array.isArray(cast)){
      for(let i = 0; i<cast.length; i++){
        this.actors.push(cast[0]);
      }
    }
    else{
        this.actors.push(cast);
    }
  }
}

module.exports = Movie;
