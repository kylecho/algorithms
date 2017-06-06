/**
 * @param {number[]} heights
 * @return {number}
 */

const maxArea = (heights) => {
  const len = heights.length
  let i = 0
  let j = len - 1
  let water = 0

  while (i < j) {
    water = Math.max(water, (j - i) * Math.min(heights[i], heights[j]))
    if (heights[i] < heights[j]) {
      i++
    } else {
      j--
    }
  }

  return water
}

console.log(maxArea([2, 3, 1, 2, 3]))
