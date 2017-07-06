const makeIterator = (array) => {
  let nextIndex = 0

  return {
    next: () => {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { value: undefined, done: true }
    }
  }
}

const iterator = makeIterator([1, 2, 3])
console.log(iterator.next()) // => { value: 1, done: false }
console.log(iterator.next()) // => { value: 2, done: false }
console.log(iterator.next()) // => { value: 3, done: false }
console.log(iterator.next()) // => { value: undefined, done: true }
