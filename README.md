# Project Euler

This is a repo for all my project euler solutions written in javascript.

## A note on algorithm complexity

Algorithm complexity and efficiency is measured using big O notation which is basically just syntax for comparing algorithms. Complexity ranges from most efficient O(1) to least efficient O(2N)

`O(1)` describes an algorithm whose complexity is constant regardless of size of the input data set.

```javascript
function is_first_element_null(list) {
  return list[0] == null
}
```

`O(N)` increases in complexity liniarly i.e. its complexity is directly preportional to the input size.

```javascript
function ContainsValue(list, value) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == value) return true
  }
  return false
}
```

`O(N2)` represents an algorithm whos complexity is preportional to the square of the size of the input space. This level of complexity commonly occurs in nested loops. Deeper nested iterations will result in `O(N3)`, `O(N4)` etc.

```javascript
function contains_duplicates(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      // Don't compare with self
      if (i == j) continue
      if (list[i] == list[j]) return true
    }
  }

  return false
}
```

`O2N` denotes an algorithm whose complexity increases exponentially, i.e. its complexity doubles after each increment of the input size. Examples of `O2N` are recursive functions.

Here's some tool working out the fibbonacci sequence using a recursive function...

```javascript
function fibonacci(number) {
  if (number <= 1) return number
  return fibonacci(number - 2) + fibonacci(number - 1)
}
```

## Logarithms
