// Initialize an array
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// Define two functions for adding elements to front of an array
function addElementToBeginningOfArray(array, element) {
    return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// Define two functions for adding elements to end of an array
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

// Define a function for accessing elements of an array
function accessElementInArray(array, index) {
  return array[index];
}

// Define a function for removing an element from the beginning of an array
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

// Define a function for removing an element from the front of an array
function removeElementFromBeginningOfArray(arr) {
  arr2 = [...arr];
  arr2.shift();
  return arr2;
}

// Define a function for destructively removing an element from the end of an array
function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

// Define a function for removing an element from the end of an array
function removeElementFromEndOfArray(arr) {
  newArr = [...arr];
  newArr.pop()
  return newArr;
}