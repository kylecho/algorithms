/**
 * Tip: Use Shortcut Notations
 */

// This code
if (v) {
	var x = v;
} else {
	var x = 10;
}

// is the same as...
var x = v || 10;

// This code
var direction;
if (x > 100) {
	direction = 1;
} else {
	direction = -1;
}

// is the same as...
var direction = (x > 100) ? 1 : -1;
