var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function addElementToBeginningOfArray(array, element) {
  var array2 = [element, ...array];
  return array2;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function addElementToEndOfArray(array, element) {
  var array3 = [...array, element];
  return array3;
}
function accessElementInArray(array, element) {
  return array[element];
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array;
}
function removeElementFromBeginningOfArray(array, element) {
  var array4 = array.slice(1);
  return array4;
}
function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element);
  return array;
}
function removeElementFromEndOfArray(array, element) {
  var array5 = array.slice(0, array.length - 1);
  return array5;
}