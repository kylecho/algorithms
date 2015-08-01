function Decorator(options) {
  if (!options) {
    options = {};
  }
  this.before = options.before;
  this.after = options.after;
}

Decorator.prototype.decorate = function decorate(fn) {
  var decArgs = Array.prototype.slice.call(arguments, 1), self = this;
  return function() {
    var input = Array.prototype.slice.call(arguments, 0);
    if(typeof self.before == 'function') {
      input = self.before.apply(null, decArgs.concat(input)) || input;
    }
    input = fn.apply(self, input);
    if(typeof self.after == 'function') {
      input = self.after.apply(null, decArgs.concat(input)) || input;
    }
    return input;
  }
};
