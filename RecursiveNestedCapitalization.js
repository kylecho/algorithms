var capitals = [ ["berlin", "parIs", "MaDRiD"], 
                 ["monTEvideo", "BrASiLia"],
                 ["dElhi", "toKYo", "BeiJing"],
                 ["CanBerra"],
                 ["kiGaLi", "pretoRIA"] ];

// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Our recursive function
function fixLetterCase(array, x, y) {
  if (y === array.length) {
    return;
  }
  else if (x === array[y].length) {
    return fixLetterCase(array, 0, y + 1);
  }
  else {
    array[y][x] = capitalize(array[y][x]);
    return fixLetterCase(array, x + 1, y);
  }	
}

fixLetterCase(capitals, 0, 0);

console.log(capitals);
