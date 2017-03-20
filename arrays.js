var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var addElementToBeginningOfArray
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
var destructivelyAddElementToBeginningOfArray
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
var addElementToEndOfArray
function addElementToEndOfArray(array, element) {
  return [...array, element];
}
var destructivelyAddElementToEndOfArray
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
var accessElementInArray
function accessElementInArray(array, index) {
  return array[index];
}
var removeElementFromBeginningOfArray
function removeElementFromBeginningOfArray(array) {
return array.slice(-2);
}
var removeElementFromEndOfArray
function removeElementFromEndOfArray(array) {
return array.slice(0, array.length -1)
}
