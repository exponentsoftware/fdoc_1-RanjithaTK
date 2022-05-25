function checkUniqueness(array) {
  //   let uniqueArray = [...new Set(array)]
  //   if (uniqueArray.length === array.length) {
  //     return true
  //   } else {
  //     return false
  //   }
  return [...new Set(array)].length === array.length
}

console.log(checkUniqueness([1, 4, 6, 2, 9, 9]))
