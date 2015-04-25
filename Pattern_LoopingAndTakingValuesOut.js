/**
 * Pattern: Looping an array and taking the value out.
 *
 * There are times when we need to loop over an array and simultaneously assign a value to an object from another array.
 * Below is a nested for-loops which can be referenced when doing such task.
 */

function assignKnightsArmor(knights, armorAvail) {
	var x = knights.length;		 // array of knights
	var y = armorAvail.length; // array of armors
	for (var i = 0; i < x; i++) {
		for (var j = 0; j < y; j++) {
			if (armorAvail[j] instanceof ChainMail) {

				// As soon as we find a ChainMail, we splice it out of the armor array and give it to the Knight.
				knights[i].armor = armorAvail.splice(j, 1)[0];

				// Since we modified the armor array, we adjust our cached length.
				y--;

				// Since the current Knight has some armor now, we can break out of the inner most for-loop.
				break;
			}
		}
	}
}
