const evenOdd = (array) => {
  let nextEven = 0
  let nextOdd = array.length - 1

  while (nextEven < nextOdd) {
    if (array[nextEven] % 2 === 0) {
      nextEven += 1
    } else {
      swap(array, nextEven, nextOdd)
      nextOdd -= 1
    }
  }

  return array
}

const swap = (array, i, j) => {
  const temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

console.log(evenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]))
