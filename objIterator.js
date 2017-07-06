const obj = {
  first: 'Kyle',
  last: 'Cho'
}

obj[Symbol.iterator] = function * () {
  for (let key in this) {
    yield {
      key: this[key]
    }
  }
}

const arr = [...obj]

console.log(arr) // => [{ first: 'Kyle' }, { last: 'Cho' }]
