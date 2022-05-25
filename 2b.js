const sevenRandomNumbers = () => {
  let array = []
  for (let i = 0; i < 7; i++) {
    let x = Math.floor(Math.random() * 9 + 1)
    if (array.includes(x)) {
      i--
      continue
    } else {
      array.push(x)
    }
  }

  return array
}
console.log(sevenRandomNumbers())
// console.log([].includes(0))
// var NoOne = new Array()

// for (var i = 1; i < 7; ++i) {
//   let random = Math.floor(Math.random() * 9 + 1)
//   console.log(random.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 7))
// }
// console.log(NoOne)
