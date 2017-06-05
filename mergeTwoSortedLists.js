const listA = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}

const listB = {
  val: 2,
  next: {
    val: 5,
    next: null
  }
}

const list = (val) => ({
  val,
  next: null
})

const mergeTwoSortedLists = (l1, l2) => {
  let dummyHead = list(null)
  let tail = dummyHead

  while ((l1 && l1.val) && (l2 && l2.val)) {
    if (l1.val < l2.val) {
      tail.next = l1
      l1 = l1.next
    } else {
      tail.next = l2
      l2 = l2.next
    }
    tail = tail.next
  }

  tail.next = l1 || l2
  return dummyHead.next
}

mergeTwoSortedLists(listA, listB)
