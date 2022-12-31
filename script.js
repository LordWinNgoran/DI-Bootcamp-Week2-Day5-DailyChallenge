/****************************Daily Challenge: 99 Bottles Of Beer***************** */

/**
 * @author: Kouadio Jean Cyrille
 * @description: Have you heard the infamous song “99 Bottles of Beer?”
 * In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.
 * @param: initialBottles:Number
 * Date : 30/12/2022
 */



let initialBottles = 99;

alert("We start the song at " + initialBottles + " bottles");

for (let countBottle = 0; countBottle < initialBottles; countBottle++) {
      //1 Prompt the user for a number to begin counting down bottles.
      let userNumber = prompt("How many bootles do you want ?");
      // Check if user choice is great or low than 1
      if (userNumber == 1) {
            //Here we show a message for 1 bottle
            initialBottles -= userNumber;
            alert("-> Take _" + userNumber + "_ down, pass it around");
            alert("-> we have now " + initialBottles + " bottles");
      } else {
            //Here we show a message for more than 1 bottle
            initialBottles -= userNumber;
            alert("-> Take _" + userNumber + "_ down, pass them around");
            //We check if the rest of bottle is 0 else we continue the process
            if (initialBottles == 0) {
                  alert("0 bottle of beer on the wall");
            } else {

                  alert("-> we have now " + initialBottles + " bottles");
            }

      }

}