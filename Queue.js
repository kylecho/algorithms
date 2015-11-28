var Queue = function() {
  this._storage = {};
  this._start = 0;
  this._end = 0;
};

Queue.prototype.enqueue = function(value){
  this._storage[this._end++] = value;
};

Queue.prototype.dequeue = function(){
  var value;
  if (this.size() === 0) {
    return null;
  }
  if (this._start >= 0) {
    value = this._storage[this._start];
    delete this._storage[this._start++];
  }
  return value;
};

Queue.prototype.size = function(){
  return this._end - this._start;
};
