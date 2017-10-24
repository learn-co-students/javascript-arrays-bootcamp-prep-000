var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
const array = [1]
element = "foo"
index = 2
function addElementToBeginningOfArray(array, element) {
  return ([element, ...array])
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  return ([...array, element])
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0)
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(-1)
  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
