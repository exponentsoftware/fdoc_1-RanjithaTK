let scores = [
  { score: 14 },
  { score: 14 },
  { score: 14 },
  { score: 14 },
  { score: 14 },
]
function sumOfScores(scores) {
  return scores.reduce((acc, curr) => {
    return (acc += curr.score)
  }, 0)
}
console.log(sumOfScores(scores))
// const sum = (scores) => {
//   return scores.reduce((acc, curr) => {
//     return (acc += curr.score)
//   }, 0)
// }
// console.log(sum(scores))
