// My solutions
Number.prototype.add      = function(n){ return this+n }
Number.prototype.subtract = function(n){ return this-n }
Number.prototype.multiply = function(n){ return this*n }
Number.prototype.divide   = function(n){ return this/n }
Number.prototype.square   = function(){ return this*this }

// Clever
(function(proto) {
  proto.add      = function(n) { return this + n };
  proto.subtract = function(n) { return this - n };
  proto.multiply = function(n) { return this * n };
  proto.divide   = function(n) { return this / n };
  proto.square   = function()  { return this * this };
})(Number.prototype);
