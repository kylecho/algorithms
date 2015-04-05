// Leap year: checking whether a given year is a leap year or not.
function checkLeapYear(year) {
	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
		console.log(year + ' is a leap year');
		return true;
	} else {
		console.log(year + ' is not a leap year');
		return false;
	}
}

checkLeapYear(2000);