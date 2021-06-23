var chocolateBars = ["snickers", "hundred grant", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var arrayTwo = [element, ...array]
  return arrayTwo
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  var arraythree = [...array, element]
  return arraythree
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
function removeElementFromEndOfArray(array) {
  var arrayTwo = array.slice(0, array.length - 1)
  return arrayTwo
}
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
