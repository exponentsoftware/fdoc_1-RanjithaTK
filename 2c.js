// function reverse(array) {
//   var output = []
//   while (array.length) {
//     output.push(array.pop())
//   }

//   return output
// }

// console.log(reverse([1, 2, 3, 4, 5, 6, 7]))

function reverse(array) {
  let output = []
  //   for (let i = array.length; i > 0; i--) {
  //     output.push(array.pop())
  //   }
  let j = array.length
  while (j > 0) {
    output.push(array.pop())
    j--
  }
  return output
}

console.log(reverse(["A", "B", "C"]))
