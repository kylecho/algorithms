class QueueWithCounts {
  constructor () {
    this.queue = []
    this.mapCounts = {}
    this.dequeueCount = 0
    this.distinctCount = 0
  }

  has (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key)
  }

  enqueue (char) {
    const { queue, has } = this

    queue.push(char)

    // if char is new, initialize mapCounts, and increment distinctCount
    if (!has(queue, char)) {
      this.mapCounts[char] = 0
      this.distinctCount += 1
    }

    this.mapCounts[char] += 1
  }

  dequeue () {
    const { queue } = this
    const removed = queue.shift()

    // if char no longer exist in the queue, remove it from mapCounts and decrement distinctCount
    if (this.mapCounts[removed] - 1 === 0) {
      delete this.mapCounts[removed]
      this.distinctCount -= 1
    }

    // increment dequeueCount
    this.dequeueCount += 1
    return this.dequeueCount
  }
}

// TODO: handle edge case
const lengthOfLongestSubstringKDistinct = (s, k) => {
  const q = new QueueWithCounts()
  let max = 0
  let substrStart = 0

  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    q.enqueue(c)

    while (q.distinctCount > k) {
      substrStart = q.dequeue()
    }

    max = Math.max(max, i - substrStart + 1)
    console.log('max:', max)
  }

  return max
}

console.log(lengthOfLongestSubstringKDistinct('eceba', 2))
