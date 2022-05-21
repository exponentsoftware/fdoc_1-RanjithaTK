const loopingTriangle = () => {
  for (let i = "#"; i.length < 8; i += "#") {
    console.log(i)
  }
}
loopingTriangle()
for (let j = "######"; j.length > 1; j -= "#") {
  console.log(j)
}
