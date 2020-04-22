
var upper = 1000000;
var randomNumber = getRandomNumber(upper);
var guess;
var atempts = 0;

function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }

  console.log(guess, randomNumber);

 while (guess !== randomNumber) {

      guess = getRandomNumber(upper);
      atempts += 1;
  }
  

  document.write("<p>The random number was: " + randomNumber + "</p>");
  document.write("<p> It took the computer " + atempts + " atempts to get it right")

console.log("running", upper)