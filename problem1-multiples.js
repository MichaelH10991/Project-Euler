let multiples = [3, 5]
let results = []
let sum
n = 1000

for (let i = 0; i <= n; i++) {
  for (let j = 0; j < multiples.length; j++) {
    if (i % multiples[j] === 0) {
      results.push(i)
    }
    sum = results.reduce((a, b) => a + b)
  }
}

console.log(
  `sum of all the multiples of ${multiples[0]} or ${
    multiples[1]
  } below ${n} is ${sum}`
)
