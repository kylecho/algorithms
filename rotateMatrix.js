const rotateMatrix = (matrix, direction = 1) => {
  const m = matrix.length
  const n = matrix[0] && matrix[0].length
  let output = []

  for (let r = 0; r < m; r++) {
    output[r] = []

    for (let c = 0; c < n; c++) {
      if (direction > 0) {
        output[r][c] = matrix[m - c - 1][r]
      } else if (direction < 0) {
        output[r][c] = matrix[c][n - r - 1]
      }
    }
  }

  return output
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 'A', 'B', 'C'],
  ['D', 'E', 'F', 'G']
]

console.log(rotateMatrix(matrix))
/*
 * [ ['D',9,5,1],
 *   ['E','A',6,2],
 *   ['F','B',7,3],
 *   ['G','C',8,4]
 * ]
 */

console.log(rotateMatrix(matrix, -1))
