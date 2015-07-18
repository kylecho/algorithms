// Best practices & clever
function isAN(value) {
  return (value instanceof Number||typeof value === 'number') && !isNaN(value);
}
