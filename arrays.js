// Initialize an array
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// Define two functions for adding elements to front of an array
function addElementToBeginningOfArray(array, element) {
    var arrClone = array;
    arrClone.unshift(element);
    return arrClone;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// Define two functions for adding elements to end of an array
function addElementToEndOfArray(array, element) {
  var newArray = array;
  newArray.push(element);
  return newArray;
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
  arr.unshift();
  return arr;
}

// Define a function for removing an element from the front of an array
function removeElementFromBeginningOfArray(arr) {
  return arr.slice(0)
}

// Define a function for destructively removing an element from the end of an array
function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop()
}

// Define a function for removing an element from the end of an array
function removeElementFromEndOfArray(arr) {
  newArr = arr;
  newArr.slice(newArr.length - 1)
  return newArr;
}