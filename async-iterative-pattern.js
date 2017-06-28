const waterFallOver = (list, iterator, callback) => {
  let nextItemIndex = 0

  const report = () => {
    nextItemIndex += 1
    if (nextItemIndex === list.length) {
      callback()
    } else {
      iterator(list[nextItemIndex], report)
    }
  }

  iterator(list[0], report)
}

let output = ''

waterFallOver(
  [1, 2, 3],
  (path, report) => {
    setTimeout(() => {
      output += 'hi '
      report()
    })
  },
  () => console.log(output)
)
