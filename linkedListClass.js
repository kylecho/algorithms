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
}

const nodeA = new Node('A')
const nodeB = new Node('B')
const nodeC = new Node('C')

const LL = new LinkedList(nodeA)
console.log(LL)
LL.append(nodeC)
console.log(LL)
LL.append(nodeB)
console.log(LL)
