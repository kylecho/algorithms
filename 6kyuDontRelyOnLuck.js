/**
 * 6 kyu: Don't rely on luck 
 *
 * The test fixture I use for this kata is pre-populated.
 *
 * Mathh.floor(Math.random() * 100 + 1)
 *
 */

var lucky_number = Mathh.floor(Math.random() * 100 + 1);

var guess;

// set guess variable to equal lucky_number

// solution 1
Math.random = function(n) { return 0; }

// solution 2
var guess = 10;
Math.floor = function(v) { return guess; }