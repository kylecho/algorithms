// My solutions
function roomMates( rooms, floor ){
  return rooms.filter(function(elem, index){
    if (floor === 1 && index < 6) {
      if (elem) {
        return elem;
      }
    } else if (floor === 2 && index >= 6) {
      if (elem) {
        return elem;
      }
    }
  });
}

// Best practices
function roomMates( rooms, floor ){   
  return rooms.filter(function(val, i) {
    return val !== "" && Math.floor(i / 6) === floor - 1;
  });
}
