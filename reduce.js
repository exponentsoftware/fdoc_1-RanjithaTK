let array = [1, 2, 3, 4, 5]
let output = array.reduce((acc, curr) => {
  acc += curr
  return acc
}, 0)
console.log(output)
