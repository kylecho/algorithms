knock(knock)()();

// And this is how I saw it.
//console.log(Array.prototype.slice.apply(arguments.callee.caller.arguments).toString());
//console.log(knock.prototype.constructor.toString());

function () {
	var lineCountVar = 0;

	var knock = (function () {
	// Note: openDoor,lineCount and deliverLine are all private
	// methods, and will not be shown when examining e.g.
	// knock.toString();
	
	var openDoor = function openDoor() {
		// The correct number of lines have been delivered.
		// Set a var with a random name, so we know that that
		// the challenge has been passed. We do this so that in
		// our test case we don't need to reveal the name of the
		// lineCountVar variable. Not that it really matters, but
		// I want to keep my variable names secret.
		success = Math.random().toString(36).replace(/[^a-z]+/g, '');
		eval('this["' + success + '"] = true;');
		console.log('');
		console.log('Groan. That\'s the worst "knock knock" joke I\'ve ever heard.');
		console.log('Oh well, I suppose you\'d better come in.');
		console.log('Welcome to the annual meeting of the Knock Knock Joke Society.');
	};
	
	var lineCount = function lineCount(arg) {
	lineCountVar++;
	
	if (lineCountVar === 1) {
		console.log('"Harry."');
		console.log('Harry who?');
	} else if (lineCountVar === 2) {
		console.log('"Harry up and open the door, it\'s cold out here!"');
	}

	return lineCountVar;
};

var deliverLine = function deliverLine() {
	if (lineCount() === 2) {
		openDoor();
	}	
	return deliverLine;
};

return function (arg) {
	if (arg && arg === knock) {
		console.log('"Knock knock."');
		console.log('Whos\'s there?');
		return deliverLine;
	}
	};
}).call();;
//knock(knock)()();

// And this is how I saw it.
console.log(Array.prototype.slice.apply(arguments.callee.caller.arguments).toString());
console.log(knock.prototype.constructor.toString());;
;

(function () {
var Test = global.Test,
describe = global.describe,
it = global.it,
before = global.before,
after = global.after; // Create your own tests here. These are some of the methods available:
// Test.expect(boolean, [optional] message)
// Test.assertEquals(actual, expected, [optional] message)
// Test.assertSimilar(actual, expected, [optional] message)
// Test.assertNotEquals(actual, expected, [optional] message)
})();
}

function (arg) {
	if (arg && arg === knock) {
		console.log('"Knock knock."');
		console.log('Whos\'s there?');
		return deliverLine;
	}
}