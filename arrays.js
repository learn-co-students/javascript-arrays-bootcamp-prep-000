// Learn.co Bootcamp Prep 09 JavaScript Arrays Lab

// Create array of chocolate bars.
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

// Define function that takes in an array and an element to add to the
// array. The function should add the element to the beginning of the array and
// then return a whole NEW array.
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

// Define function that takes in an array and an element to add to the
// array. The function should add the element to the beginning of the array and
// then return a whole ALTERED array.
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// Define function that takes two arguments, an array and an element to add
// to the END of the array. DO NOT alter the original array.
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

// Define function that takes two arguments, an array and an element to add
// to the END of the array. DO alter the original array.
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

// Define a function that takes in an array and an array index and returns the
// element at the array index.
function accessElementInArray(array, index) {
  return array[index];
}

// Define a function that takes an array and removes the first element of the
// array. Return the modified array.
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// Define a function that takes an array and removes the first element. Return
// the entire array. Return the entire (not mutated) array.
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

// Define a function that takes an array and removes the last element. Return
// the entire array, without the last element.
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

// Define a function that takes an array and removes the last element. Return
// the entire, original array.
function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, -1);
  return newArray;
}
