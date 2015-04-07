/**
 * Trolls are attacking your comment section!
 * A common way to deal with this situation is to remove all the vowels from
 * the troll's comments, neutralizing the threat.
 * 
 * Your task is to write a function that takes a string and return a new string
 * and return a new string with all vowels removed.
 *
 * For example:
 * The string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 */

function disemvowel(str) {

	// Use of RegExp is effective. String.replace method utilizes it.
  var myStr = str.replace(/[aeiou]/gi, '');
  return myStr;
}
