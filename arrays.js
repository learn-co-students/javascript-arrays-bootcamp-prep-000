//my arrays!
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [candyString, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, candyString) {
  return [...chocolateBars, candyString]
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.push(candyString)
  return chocolateBars
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.shift(candyString)
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBarssliced = chocolateBars.slice(1)
  return chocolateBarssliced
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  slicedChocolatedBars = chocolateBars.slice(0, chocolateBars.length - 1)
  return slicedChocolatedBars
}
