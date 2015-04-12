/**
 * Have the function letterCapitalize(str) take the str parameter being passed and capitalize
 * the first letter of each word. Words will be separated by only one space.
 */

function letterCapitalize(str) {
	var myArr = str.split('');
	for (var i = 0; i < myArr.length; i++) {
		if (myArr[i - 1] === undefined || myArr[i - 1] == ' ') {
			myArr[i] = myArr[i].toUpperCase();
		}
	}

	return myArr.join('');
}
