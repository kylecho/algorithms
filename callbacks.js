const reportOrders = (orders) => {
  if (typeof orders === 'string') {
    console.log(orders)
  } else if (typeof orders === 'object') {
    for (let key in orders) {
      console.log(`${key}: ${orders[key]}`)
    }
  }
}

const speakOrders = (orders, callback) => {
  callback(orders)
}

speakOrders({ name: 'Minion', specialty: 'Scribe' }, reportOrders)

const findAverage = (a, b, callback) => {
  const average = (a + b) / 2
  if (typeof a !== 'number' || typeof b !== 'number') {
    callback(new Error('Invalid numbers'), null)
  } else {
    callback(null, average)
  }
}

findAverage(5, 7, (err, result) => {
  if (err) { console.log(err) }
  console.log(`average is ${result}`)
})

// seems silly to go through callback when the value could just be returned, but
// there are situations where that's impractical and callbacks are necessary.

// rather than wait around for a function to finish by returning a value, we can
// use callbacks to do it asynchronously.

const asyncDivision = (dividend, divisor, cb) => {
  const _asyncDivision = (dividend, divisor, cb) => {
    process.nextTick(() => {
      if (
        typeof dividend !== 'number' ||
        typeof divisor !== 'number' ||
        divisor === 0
      ) {
        return cb(new Error('Invalid operands'))
      }

      return cb(null, dividend / divisor)
    })
  }

  if (cb) {
    return _asyncDivision(dividend, divisor, cb)
  }

  // optional promisification, only if no callback
  return new Promise((resolve, reject) => {
    _asyncDivision(dividend, divisor, (err, result) => {
      return err ? reject(err) : resolve(result)
    })
  })
}
