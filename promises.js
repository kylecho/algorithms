const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!')
  }, 500)
})

myPromise.then((result) => console.log(`yay! ${result}`))

// Essentially, a promise is a returned object you attach callbacks to, instead
// of passing callbacks into a function.
// E.g. instead of an old-style function that expects two callbacks, and calls
// one of them on eventual completion or failure:

// Callback style

const sayHi = (error, result) => {
  if (error) {
    console.log(error)
  } else {
    console.log(`Using Callback: Hi! ${result}!`)
  }
}

const sayHiWithCallback = (name, cb) => {
  if (typeof name !== 'string') {
    return cb(new Error('Name is not a string'))
  } else {
    let asyncName
    setTimeout(() => {
      asyncName = name
      return cb(null, asyncName)
    }, 400)
  }
}

sayHiWithCallback('Kyle', sayHi)

// Promise style
const promisify = (name, fn) => {
  return new Promise((resolve, reject) => {
    fn(name, (err, result) => {
      if (!err) {
        return resolve(result)
      } else {
        return reject(err)
      }
    })
  })
}

const promisedSayHi = promisify('Kyle', sayHiWithCallback)
promisedSayHi
  .then((result) => console.log(`Using Promise: Hi! ${result}`))
  .catch((err) => console.log(`Error occurred: ${err}`))
