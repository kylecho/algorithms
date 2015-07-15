// My solution
function csvColumns(csv, indices){

  var csvSplit = csv.split('\n');
  var csvDoubleSplit = [];
  for (var i = 0; i < csvSplit.length; i++) {
    var t = csvSplit[i].split(',');
    csvDoubleSplit.push(t);
  }
  
  var result = '';
  for (var j = 0; j < csvDoubleSplit.length; j++) {
    for (var k = 0; k < indices.length; k++) {
      if (csvDoubleSplit[j][indices[k]] && csvDoubleSplit[j][indices[k + 1]]) {
        result += csvDoubleSplit[j][indices[k]] + ',';
      } else if (csvDoubleSplit[j][indices[k]] && !csvDoubleSplit[j][indices[k + 1]]) {
        result += csvDoubleSplit[j][indices[k]];
      }
    }
    if (j < csvDoubleSplit.length - 1 && csvDoubleSplit[j][indices[0]]) {
      result += '\n';
    }
  }
  
  return result;

}


// Clever
function csvColumns(csv, indices) {
  return csv.split('\n').map(function(row) {
    return row.split(',').filter(function(_, i) {
      return indices.indexOf(i) !== -1;
    }).join(',');
  }).filter(function(s) { return s.length > 0; }).join('\n');
}
