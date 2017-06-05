class StackWithMax {
  constructor () {
    this.storage = []
    this.max = null
    this.size = null
  }

  push (val) {
    const currentMax = this.max ? Math.max(this.max, val) : val
    const payload = {
      val,
      max: currentMax
    }
    this.max = currentMax
    this.storage.push(payload)
    this.size = this.size === null ? 0 : ++this.size
  }

  pop () {
    if (!this.storage.length) throw new Error('Stack is empty.')
    const payload = this.storage.pop()
    this.size--
    this.max = this.size > 0 ? this.storage[this.size].max : null
    return payload
  }

  getMax () {
    if (!this.storage.length) throw new Error('Stack is empty.')
    return this.storage[this.size].max
  }
}

const myStack = new StackWithMax()
myStack.push(5)
myStack.push(7)
myStack.push(10)
myStack.push(6)
console.log('call getMax 1:', myStack.getMax())
myStack.pop()
console.log('call getMax 2:', myStack.getMax())
myStack.pop()
console.log('call getMax 3:', myStack.getMax())
myStack.pop()
console.log('call getMax 4:', myStack.getMax())
myStack.pop()
