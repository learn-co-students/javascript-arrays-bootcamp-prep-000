var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array2 = array.unshift(element);
  return array2
}

function addElementToEndOfArray(array, element) {
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var array2 = array.push(element);
  return array2;
}

function removeElementFromBeginningOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}

function accessElementInArray(array, index) {
  return array[index];
}
