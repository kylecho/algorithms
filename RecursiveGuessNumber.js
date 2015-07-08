function guessNumber(number, clue) {
  // Prompt the user for a number using the string value of clue
  var guess = prompt(clue);  
  // Convert their guess to a number using +
  guess = +guess;
  
  // Define base case
  if (guess === number) {
    return console.log("You got it! The number was " + number);
  }
  // Define first recursive case (guess is too low)
  else if (guess < number) {
    return guessNumber(number, "Your guess is lower!");
  }
  // Define second recursive case (guess is too high)
  else if (guess > number) {
    return guessNumber(number, "Your guess is higher!");    
  }
}

guessNumber(777, "Guess a number between 1 and 999.");
