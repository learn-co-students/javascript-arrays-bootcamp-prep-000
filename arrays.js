var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}
function addElementToEndOfArray(array, element) {
  var newArray = [array..., element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
}
