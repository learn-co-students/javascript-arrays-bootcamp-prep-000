var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(gimmeChocolate, candyToAdd) {
  return [candyToAdd, ...gimmeChocolate]
}
function destructivelyAddElementToBeginningOfArray(gimmeChocolate, candytoAdd) {
  gimmeChocolate.unshift (candytoAdd)
  return gimmeChocolate
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push (element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}