/**
 * The object of this is to create a function called removeValue that removes
 * all of a certain value from an array using .splice() and then returns the array.
 * If the array is empty or has no element to remove it should return false.
 * 
 * example:
 * arr = [1, 2, 1, '1', 3]
 * arr.removeValue(1); // return [2, '1', 3]
 */

Array.prototype.removeValue = function(thing) {
	for (var i = 0; i < this.length; i++) {
		if(this[i] == thing) {
			this.splice(i, 1);
		}
	}

	return this;
}
