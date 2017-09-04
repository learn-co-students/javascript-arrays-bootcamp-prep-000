var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [];

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}
function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array, element) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array = array.pop()
  return array
}
