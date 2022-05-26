let array = [1, 2, 3, 4, 5, 6]
multiplyByTwo = array.map((arr) => arr * 2)

console.log(multiplyByTwo)
//to convert to binary

array2 = array.map((arr) => arr.toString(2))
console.log(array2)
//to get odd
odd = array.filter((arr) => arr % 2)
console.log(odd)
