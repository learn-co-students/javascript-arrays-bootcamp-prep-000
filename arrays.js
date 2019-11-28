var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
  ]

function addElementToBeginningOfArray(array, element) {
 return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array;
  array.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var newArray = array;
  array.push(element);
  return newArray;
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var newArray = array;
  array.shift();
  return newArray;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var newArray = array;
  newArray.pop();
  return newArray;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}