var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]; // adds to beginning of array w/o mutating/altering the original
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element); // adds to beginning of array by mutating/altering the original
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]; // adds to end of array w/o mutating/altering the original
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element); // adds to end of array by mutating/altering the original
  return array;
}

function accessElementInArray(array, index) {
  return array[index]; // accesses the element in array at the given index
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1); // returns the array with the first element removed w/o mutating/altering the original
  return newArray;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(); // returns the array with the first element removed by mutating/altering the original
  return array;
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1); // returns the array with the last element removed w/o mutating/altering the original
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(); // returns the array with the last element removed by mutating/altering the original
  return array;
}