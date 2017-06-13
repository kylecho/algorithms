class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor (object = null) {
    this.head = object
  }

  append (newNode) {
    let current = this.head
    if (this.head) {
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    } else {
      this.head = newNode
    }
  }

  getPosition (position) {
    let counter = 1
    let current = this.head

    if (position < 1) return null

    while (current && counter <= position) {
      if (counter === position) {
        return current
      }
      current = current.next
      counter += 1
    }

    return null
  }

  insert (newNode, position) {
    let counter = 1
    let current = this.head

    if (position > 1) {
      while (current && counter < position) {
        if (counter === position - 1) {
          newNode.next = current.next
          current.next = newNode
        }
        current = current.next
        counter += 1
      }
    } else if (position === 1) {
      newNode.next = this.head
      this.head = newNode
    }
  }

  delete (value) {
    let current = this.head
    let previous = null

    while (current.value !== value && current.next) {
      previous = current
      current = current.next
    }

    if (current.value === value) {
      if (previous) {
        previous.next = current.next
      } else {
        this.head = current.next
      }
    }

    return null
  }
}

const nodeA = new Node('A')
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')

const LL = new LinkedList(nodeA)
console.log(LL)
LL.append(nodeB)
console.log(LL)
LL.append(nodeC)
console.log(LL)
console.log(LL.getPosition(4)) // => null
console.log(LL.getPosition(3)) // => nodeC
LL.insert(nodeD, 2)
console.log('---inserting nodeD to position 2---')
console.log(LL)
LL.delete('D')
console.log('---deleting value D---')
console.log(LL)
LL.delete('A')
console.log('---deleting value A---')
console.log(LL)
