const sentence = `I am a teacher and I love teaching . There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher ?`

const varietyOfWords = (sentence) => {
  let newSentence = sentence.replace(/.|\?/g, "")
  console.log(newSentence)
  let array = sentence.split(" ")
  let newArray = [...new Set(array)]
  return newArray.length
}
console.log(varietyOfWords(sentence))
