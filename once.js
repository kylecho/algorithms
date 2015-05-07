var once = function(func) {
	var called = false;
	return function() {
		if (!called) {
			called = true;
			return func();
		} else {
			return false;
		}
	};
};

var logOnce = once(function(){ return console.log('log this just one time.'); });
logOnce();
=> log this just one time.
logOnce();
=> false