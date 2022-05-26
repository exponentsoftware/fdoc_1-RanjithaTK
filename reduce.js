let array = [1, 2, 3, 4, 5]
let output = array.reduce((acc, curr) => {
  acc += curr
  return acc
}, 0)
console.log(output)

const out = array.reduce((max, curr) => {
  if (max < curr) {
    max = curr
  }
  return max
}, 0)
console.log(out)

let detail = [
  { name: "ranji", age: 24 },
  { name: "buddy", age: 28 },
]
let sumOfAge = detail.reduce((acc, curr) => {
  return (acc += curr.age)
}, 0)
console.log(sumOfAge)

const sum = detail.reduce((acc, curr) => {
  return (acc += curr.age)
}, 0)
console.log(sum)
