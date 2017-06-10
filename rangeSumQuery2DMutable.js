const m = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

const sumRegion = (matrix, row1, col1, row2, col2) => {
  let total = 0

  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      total += m[i][j]
    }
  }

  return total
}

const update = (m, row, col, val) => {
  m[row][col] = val
}

console.log(sumRegion(m, 2, 1, 4, 3)) // => 8
update(m, 3, 2, 2)
console.log(sumRegion(m, 2, 1, 4, 3)) // => 10
