const depthSum = (numArray) => {
  return helper(numArray, 1)
}

const helper = (array, depth) => {
  let result = 0

  for (let i = 0; i < array.length; i++) {
    result += typeof array[i] === 'number' ? array[i] * depth : helper(array[i], depth + 1)
  }

  return result
}

console.log(depthSum([[1, 1], 2, [1, 1]])) // => 10
