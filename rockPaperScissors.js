var rockPaperScissors = function(rounds) {

  var outcomes = [];
  var plays = ['rock', 'paper', 'scissors'];
  var playedSoFar = [];
  rounds = rounds;

  var combos = function(roundsToGo) {

    // base case
    if (roundsToGo === 0) {
      outcomes.push( playedSoFar.slice() );
      return;
    }

    // recursive case
    for (var i = 0; i < plays.length; i++) {
      playedSoFar.push(plays[i]);
      combos(roundsToGo - 1);
      playedSoFar.pop();
    }


  };

  combos(rounds);
  return outcomes;

};

console.log(rockPaperScissors(3));
