var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles", "skittles"]

function addElementToBeginningOfArray(array, element) {
  x = [element, ...array];
  return x;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element) {
  x = [...array, element];
  return x;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}
function removeElementFromEndOfArray(array) {
x = array.slice(0, array.length - 1);
  return x
}
