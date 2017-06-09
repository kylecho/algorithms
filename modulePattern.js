const counter = (() => {
  // private variable created using closure
  let privateCounter = 0
  const changeBy = val => privateCounter += val

  return {
    increment () {
      changeBy(1)
    },
    decrement () {
      changeBy(-1)
    },
    value () {
      return privateCounter
    }
  }
})()

console.log(counter.value()) // => 0
counter.increment()
counter.increment()
counter.increment()
console.log(counter.value()) // => 3
counter.decrement()
counter.decrement()
counter.decrement()
counter.decrement()
console.log(counter.value()) // => -1
