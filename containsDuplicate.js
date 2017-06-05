const containsDuplicate = (nums) => {
  let mySet = new Set()

  for (let num of nums) {
    if (mySet.has(num)) {
      return true
    } else {
      mySet.add(num)
    }
  }

  return false
}

console.log(containsDuplicate([3, 3]))
