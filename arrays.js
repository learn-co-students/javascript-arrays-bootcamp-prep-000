var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element_to_add) {
  var array2 = [element_to_add, ...array];
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array, element_to_add) {
  array.unshift(element_to_add);
  return array;
}

function addElementToEndOfArray(array, element_to_add) {
  var array2 = [...array, element_to_add];
  return array2;
}

function destructivelyAddElementToEndOfArray(array, element_to_add) {
  array.push(element_to_add);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array2 = array.slice(1);
  return array2;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array2 = array.slice(0, array.length - 1)
  return array2
}
