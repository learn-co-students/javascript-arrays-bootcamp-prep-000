var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var numberArray = [1, 2, 3, 4, 5]
var zero = "0"

function addElementToBeginningOfArray (numberArray, zero) {
  return (zero, ...numberArray])
}

function destructivelyAddElementToBeginningOfArray (numberArray, zero) {
  return numberArray.unshift(zero)
}
