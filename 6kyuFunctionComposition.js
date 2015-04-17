/**
 * 6 kyu: Function Composition
 * 
 * Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas.
 * Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed
 * function may be passed multiple arguments!
 *
 * compose(f , g)(x)
 * => f( g( x ) )
 */

function compose(f, g) {
	return function() {
		return f(g.apply(this, arguments));
	}
}
