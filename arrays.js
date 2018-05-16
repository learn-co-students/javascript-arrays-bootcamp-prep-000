var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, n) {
  var newArray = [n, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, n) {
  array.unshift(n)
  return array
}
function addElementToEndOfArray (array, n) {
  var newArray = [...array, n]
  return newArray
}
function destructivelyAddElementToEndOfArray (array, n) {
  array.push(n)
  return array
}
function accessElementInArray(array, index) {
  var element = array[index]
  return element
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}