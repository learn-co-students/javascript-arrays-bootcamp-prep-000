var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array];
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array, element) {
  newArray = [...array, element];
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}
function accessElementInArray(array, index) {
  indexElement = array[index];
  return indexElement
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array
}
function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1);
  return newArray
}
function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element);
  return array
}
function removeElementFromEndOfArray(array, elment) {
  newArray = array.slice(0, array.length - 1);
  return newArray
}
