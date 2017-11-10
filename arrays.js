var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(A, N) {
  return [N, ...A]
}

function destructivelyAddElementToBeginningOfArray(A,N) {
   A.unshift(N)
   return A
}

function addElementToEndOfArray(A, N) {
  return [...A, N]
}

function destructivelyAddElementToEndOfArray(A, N) {
  A.push(N)
  return A
}

function accessElementInArray(A, n) {
  return A[n]
}

function destructivelyRemoveElementFromBeginningOfArray(A) {
  A.shift()
  return A
}

function removeElementFromBeginningOfArray(A) {
   return A.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(A) {
  A.pop()
  return A
}

function removeElementFromEndOfArray(A) {
  return A.slice(0, A.length-1)
}
