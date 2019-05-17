let nums = [0, 1]
let sum = 0
let sum_of_even_fibs = 0

while (sum < 4000000) {
  sum = nums[0] + nums[1]
  if (sum % 2 === 0) {
    sum_of_even_fibs += sum
  }
  nums[0] = nums[1]
  nums[1] = sum
}

console.log(sum_of_even_fibs)
