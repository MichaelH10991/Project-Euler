let n = 10
let factors = []

// we know we dont want even numbers to this hops by two each iteration
// for (let i = n; i >= 0; i--) {
//   // first check if i is a factor
//   // console.log(i)
//   if (n % i === 0) {
//     console.log(`${i} is an odd factor `)
//     factors.push(i)
//     // if i is a factor, check if i is prime
//   }
//   // we need to check each number isnt a prime, how?
//   // let isnt = ()
// }

// start at end
// we can do
// if number divides by 2 its not prime

// find a prime
// try to divide
// if not
// have some checking e.g. multiply the primes and if resukt is greater than n then stop

for (let i = 2; i < n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      console.log(`${i} is not prime`)
      break
    } else {
      console.log(`${i} is a prime`)
      break
    }
  }
}
