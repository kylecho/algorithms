// the callback is not executed immediately at this time, but added to the
// function queue so that it is executed as soon as possible, after all the
// currently executing and currently queued event handlers have completed.
console.log('first')
setTimeout(() => console.log('second'), 0)
console.log('third')

console.log('1')
// setImmediate achieves the same effect, except it doesn't use the queue of
// functions.
setImmediate(() => console.log('2'))
console.log('3')
