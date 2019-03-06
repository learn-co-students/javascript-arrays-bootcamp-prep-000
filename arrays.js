 chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
 return [element, ... array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift (element);
  return array
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push (element);
  return array;
}
function accessElementInArray() {
  var array = [3,3,3];
  return array[1]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(-2)
}
function removeElementFromEndOfArray(array) {
  return array.slice(0,2)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array 
}





