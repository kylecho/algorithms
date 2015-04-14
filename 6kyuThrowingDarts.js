/**
 * You've just recently been hired to calculate scores for a Dart Board game! 
 *
 * Scoring specifications:
 * 0 points - radius above 10
 * 5 points - radius between 5 and 10 inclusive
 * 10 points - radius less than 5
 *
 * If all radiuses are less than 5, award 100 BONUS POINTS!
 *
 * Write a function that accepts an array of radiuses (can be integers and/or floats), 
 * and returns a total score using the above specification.
 * An empty array should return 0.
 *	
 * Examples:
 * scoreThrows( [1, 5, 11] ) => returns 15 
 * scoreThrows( [15, 20, 30] ) => returns 0 
 * scoreThrows( [1, 2, 3, 4] ) => returns 140
 */


function scoreThrows(radiuses) {
	var score = 0;
	for (var i = 0; i < radiuses.length; i++) {
		if (radiuses[i] > 10) {
			score += 0;
		} else if (10 >= radiuses[i] && radiuses[i] >= 5) {
			score += 5;
		} else if (5 > radiuses[i]) {
			score += 10;
		}
	}
	if (radiuses.every(function(a) { return a < 5; })) {
		score += 100;
	}
	if (radiuses.length == 0) {
		return 0;
	}
	return score;
}
