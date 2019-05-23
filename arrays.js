var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  var temp = [element, ...array]
  return temp
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  var temp = [...array, element]
  return temp
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
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
  var temp = array.slice(1)
 return temp
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  var temp = array.slice(0, array.length - 1)
 return temp
}