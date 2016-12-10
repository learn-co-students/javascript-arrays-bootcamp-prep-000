var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array
  return [element, ...array]
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array.unshift(element)
  return array
};

function addElementToEndOfArray(array, element) {
  var array
  return [...array, element]
};

function destructivelyAddElementToEndOfArray(array, element) {
  var secondNewArray = array.push(element)
  return array
};

function accessElementInArray(array, index) {
  var array
  return array[index]
};

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  var array
  return array.shift(element)
};

function removeElementFromBeginningOfArray(array) {
  var array
  return array = array.slice(1)
};

function destructivelyRemoveElementFromEndOfArray(array, element) {
  var array
  return array.pop(element)
};

function removeElementFromEndOfArray(array) {
  var array
  return array.slice(0, array.length - 1)
};