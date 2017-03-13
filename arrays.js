// Practice using Arrays

// An array definition
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// Takes an array and a value as arguments then returns a new array with the
// value put at the beginning while preserving the original array
function addElementToBeginningOfArray(array, value) {
  return [value, ...array];
}

// Takes an array and a value as arguments then returns the original array 
// with the value placed at the beginning of the array.
function destructivelyAddElementToBeginningOfArray(array, value) {
  array.unshift(value);
  return array;
}

// Takes an array and a value as arguments then returns a new array with the
// value put at the end while preserving the original array
function addElementToEndOfArray(array, value) {
  return [...array, value];
}

// Takes an array and a value as arguments then returns the original array
// with the value placed at the end of the array.
function destructivelyAddElementToEndOfArray(array, value) {
  array.push(value);
  return array;
}

// Takes an array and index as arguments then returns the value of the arguments
// in the given index of the array
function accessElementInArray(array, index) {
  return array[index];
}

// Takes an array as an argument then returns the original array with the first
// element removed
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// Takes an array as an argument the returns a copy of the original array with
// the first element removed preserving the original array
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

// Takes an array as an argument the returns the original array with the last 
// element removed
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

// Takes an array as an argument then returns a copy of the original array with 
// the last element removed preserving the original array
function removeElementFromEndOfArray(array) {
  return [...array].slice(0, array.length - 1);
}
