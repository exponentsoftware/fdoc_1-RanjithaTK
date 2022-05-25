const loopingTriangle = () => {
  // for (let i = "#"; i.length < 8; i += "#") {
  //   console.log(i)
  // }
  for (let i = 1; i < 7; i++) {
    console.log("#".repeat(i))
  }
  for (let i = 6; i > 0; i--) {
    console.log("#".repeat(i))
  }
}
loopingTriangle()
// for (let j = "######"; j.length > 1; j -= "#") {
//   console.log(j)
// }
