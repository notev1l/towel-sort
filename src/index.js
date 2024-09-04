module.exports = function towelSort (matrix) {
  return matrix === undefined || matrix.length === 0 ? [] : matrix.map(row => matrix.indexOf(row) % 2 === 0 ? row : row.reverse()).join(',').split(',').map(Number)
}
