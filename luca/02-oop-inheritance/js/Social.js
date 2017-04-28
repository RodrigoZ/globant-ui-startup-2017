/*
* Object Social
*/
let Social = {

    /*
    * Shows the friendName in the console.
    * input: friendName
    */
    share(friendName) {
        console.log("Share " + this.title + " name with " + friendName);
    },

    /*
    * Shows the friendName in the console.
    * input: friendName
    */
    like(friendName) {
        console.log("Like " + this.title + " name with " + friendName);
    }
}

module.exports = Social;
