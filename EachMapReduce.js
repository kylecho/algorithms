// Each
var each = function(collection, func) {
  if (Array.isArray(collection)) { // (collection.length != -1) will also work.
    for (var i = 0; i < collection.length; i++) {
      func(collection[i]);
    }
  } else { // or else if (typeof collection === 'object')
    for (var key in collection) {
      func(collection[key]);
    }
  }
};

// Another Each
var each = function(list, callback) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (var key in list) {
      callback(list[key], key, list);
    }
  }
};

// Map
var map = function(collection, callback) {
  var result = [];
  
  each(collection, function(element){
  	result.push(callback(element));
  });
  
  return result;
};

// Reduce
var reduce = function(array, callback, initial) {
  var start = initial || array[0];
    if (initial === undefined) { 
      for (var i = 1; i < array.length; i++) {
          start = callback(start, array[i]);
      }
    } else {
      for (var i = 0; i < array.length; i++) {
          start = callback(start, array[i]);
      }
    }
    return start;
};

reduce([1,2,3,4,5], function(prev, curr) { return prev + curr; });
=> 15
reduce([1,2,3,4,5], function(prev, curr) { return prev + curr; }, 10);
=> 25