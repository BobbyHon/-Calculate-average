function findAverage(array) {
    return array.length ? array.reduce((sum, x) => sum + x, 0) / array.length : 0
  }