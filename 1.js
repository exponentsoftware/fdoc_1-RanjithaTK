const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love."
const countWords = (para, word1, word2) => {
  count1 = 0
  count2 = 0
  let array = para.split(" ")
  for (let i = 0; i < array.length; i++) {
    if ((array[i] = word1)) {
      count1++
    }
    if ((array[i] = word2)) {
      count2++
    }
  }
  return count1 > count2 ? `${word1}>${word2}` : `${word2}>${word1}`
}
console.log(countWords(paragraph, "you", "love"))
