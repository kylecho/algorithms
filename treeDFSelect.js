var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter, depth, results) {
  results = results || [];
  depth = depth || 0;

  // check the current value
  if (filter(this.value, depth)) {
    results.push(this.value);
  }

  // iterate over the children
  for (var i = 0; i < this.children.length; i++) {
    // call DFSelect method on each child tree
    this.children[i].DFSelect(filter, depth+1, results);
  }

  return results;
};
