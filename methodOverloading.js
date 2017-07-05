function addMethod (object, name, fn) {
  // Save a reference to the old method
  var old = object[name]

  // Overwrite the method with our new one
  object[name] = function () {
    // Check the method with incoming arguments,
    // compared to our overload function
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments)

    // Otherwise, fallback to the old method
    } else if (typeof old === 'function') {
      return old.apply(this, arguments)
    }
  }
}

function Ninjas () {
  var ninjas = ['Dean Edwards', 'Sam Stephenson', 'Alex Russell']

  addMethod(this, 'find', function () {
    return ninjas
  })

  addMethod(this, 'find', function (name) {
    var ret = []
    for (var i = 0; i < ninjas.length; i++) {
      if (ninjas[i].indexOf(name) === 0) {
        ret.push(ninjas[i])
      }
    }
    return ret
  })

  addMethod(this, 'find', function (first, last) {
    var ret = []
    for (var i = 0; i < ninjas.length; i++) {
      if (ninjas[i] === (first + ' ' + last)) {
        ret.push(ninjas[i])
      }
    }
    return ret
  })
}

var ninjas = new Ninjas()
console.log(ninjas.find()) // Find all ninjas
console.log(ninjas.find('Sam')) // => 'Sam Stephenson'
console.log(ninjas.find('Alex', 'Russell')) // => 'Alex Russell'
