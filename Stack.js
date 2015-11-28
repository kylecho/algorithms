var Stack = function() {
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value){
  this._storage[this._size++] = value;
};

Stack.prototype.pop = function(){
  if (this._size === 0) { return null };
  var value = this._storage[--this._size];

  delete this._storage[this._size];

  return value;
};

Stack.prototype.size = function(){
  return this._size;
};
