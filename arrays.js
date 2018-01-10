var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}
function destructivelyRemoveElementFromEndOfArray(array, element) {
  return array.pop();
}
function removeElementFromEndOfArray(array, element) {
  return array.slice(0, array.length - 1);
 }
 function removeElementFromBeginningOfArray(array, element) {
 return array.slice(1)
}
function accessElementInArray(array, index) {
  return array.pop();
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  return array.slice(1)
}
function addElementToEndOfArray(array, element) {
  var newarray = [1,2,3,4];
  return newarray = [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element);
 return array
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop()
  return array
}
