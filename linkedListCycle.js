const Node = (value) => ({
  value,
  next: null
})

const hasCycle = (linkedList) => {
  let slow = linkedList
  let fast = linkedList
  let pause = true

  while (fast = fast.next) {
    if (fast === slow) { return true }
    slow = pause ? slow : slow.next
    pause = !pause
  }

  return false
}

const nodeA = Node('A')
const nodeB = nodeA.next = Node('B')
const nodeC = nodeB.next = Node('C')
const nodeD = nodeC.next = Node('D')
const nodeE = nodeD.next = Node('E')
console.log(hasCycle(nodeA)) // => false
nodeE.next = nodeB
console.log(hasCycle(nodeA)) // => true
