var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  var leaves;

  if (this.children.length === 0) {
    leaves = 1;
  } else {
    leaves = 0;
    for (var i = 0; i < this.children.length; i++) {
      leaves += this.children[i].countLeaves();
    }
  }
  return leaves;
};
