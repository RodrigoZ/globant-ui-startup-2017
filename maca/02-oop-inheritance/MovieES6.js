//Exercise 4

import EventEmitter from "./EventEmitter.js"

class Movie extends EventEmitter{
 
/**
 * 
 * Suscribes the movie to the pururu and lightOff functions for the play event. 
 * Creates an empty array cast to store actors
 * Creates a boolean attribute playing to check if the movie is playing or paused. 
 *
 * @param  {String} title
 * @param  {Number} year
 * @param  {Number} duration
 */
  constructor(title, year, duration){
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.on('play', pururu);
    this.on("play", lightOff);  
    this.on("pause", lightOn);
    this.on("resume", lightOff);
    this.playing = false;
    this.cast = new Array();
  }


  /**
   * Publishes the play event, changes the status of the playing attribute and logs information to the console
   */
  play(){    
    this.emit("play");
    console.log(this.title + " playing.");
    this.playing = true;
  }

/**
 *  Checks the status of the playing attribute, to either
 *  publish the pause event, change the status of the playing attribute and log information to the console;
 *  or just log information to the console
 */
  pause(){
    if (this.playing) {
      console.log(this.title + ' paused');
      this.emit("pause");
      this.playing = false;
    }
    else {
      console.log(this.title + ' already paused!');
    }
    
  }

/**
 *  Checks the status of the playing attribute, to either
 *  publish the resume event, change the status of the playing attribute and log information to the console;
 *  or just log information to the console
 */

  resume(){
    if (!this.playing) {
      console.log(this.title + ' resumed');
      this.emit("resume");
      this.playing = true;

    }
    else {
      console.log(this.title + ' already playing!');
    }    
  }  

/**
 * Adds actor(s) to the cast array of the movie
 * @param {Actor} cast or
 * @param {Array} cast
 */
  addCast(cast){
    if (Array.isArray(cast)){
      cast.forEach((actor) =>  {
        this.cast.push(actor); 
      });
    }
    else{
      this.cast.push(cast); 
    }

  }

  lightOff(){    
    console.log("Luz apagada");
  }


  lightOn(){
    console.log("Luz prendida");
  }

  pururu(){
    console.log("Pururu listo");
  }

}

module.exports = Movie;
