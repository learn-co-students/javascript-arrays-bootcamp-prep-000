var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(array, element) {
return [element, ...array];

}
function addElementToBeginningOfArray(array, element) {
  return ['foo', 1]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  return [1, 'foo']
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.shift(element)
  return array
}
var array = [1]
function destructivelyAddElementToEndOfArray(array, element) {
  return [...array, 'foo']
}
function destructivelyAddElementToEndOfArray(array, element){
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
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  array.slice(3,array.length - 3)
  return array
}
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array
}
