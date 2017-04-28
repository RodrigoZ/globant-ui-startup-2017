'use strict';
/*
 * Exercise 6
 * 
 * @object literal Social
 */
const Social = {
  /* @param {string} friendName  */
  share(friendName) {
    let output = `${friendName} share ${this.title}`;
    console.log(output);
  },
  /* @param {any} friendName */
  like(friendName) {
    let output = `${friendName} like ${this.title}`;
    console.log(output);
  }
};

export { Social }