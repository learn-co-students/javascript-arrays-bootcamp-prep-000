var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
  var result = [element, ...arr];
  return result;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element); // returns new length of array
  return arr;
}

function addElementToEndOfArray(arr, element) {
  var result = [...arr, element];
  return result;
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);// returns new length of array
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index]; 
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift(); // returns the removed element
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var result = arr.slice(1); // returns the slice
  return result;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop(); // returns removed element
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var result = arr.slice(0, arr.length - 1); // returns the slice
  return result;
}

// but we didn't use splice() -- returns removed items