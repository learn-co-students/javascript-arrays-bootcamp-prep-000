var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// an array and an element to add to the beginning of the array,
// both functions add the element to the beginning of the array and then return the whole array.
// The destructive function, destructivelyAddElementToBeginningOfArray, should alter the
// original array that's passed in; addElementToBeginningOfArray, on the other hand,
// should return a new array and not modify the original.

function addElementToBeginningOfArray(arr, item) {
  var newArray = [item, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, item) {
  arr.unshift(item);
  return arr;
}

// Define two more functions, addElementToEndOfArray and
// destructivelyAddElementToEndOfArray. These functions also take two
// arguments, an array and an element to add to the end of the array.
// addElementToEndOfArray should not alter the original array;
// destructivelyAddElementToEndOfArray should alter the original array.

function addElementToEndOfArray(arr, item) {
  return [...arr, item];
}

function destructivelyAddElementToEndOfArray(arr, item) {
  arr.push(item);
  return arr;
}

//accessElementInArray. The function should accept an array and an
//index and return the element at that index.

function accessElementInArray(arr, i) {
  return arr[i];
}

// Define a function destructivelyRemoveElementFromBeginningOfArray
// that takes an array as its only argument and removes the first
//element. Your function should then return the entire array, and it
// should mutate the array.

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

// removeElementFromBeginningOfArray that takes an array as its only
// argument and removes the first element. Your function should then
// return the entire array, and it should not mutate the underlying
// array.

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr.slice(1);
  return newArr;
}

// Define a function destructivelyRemoveElementFromEndOfArray that
// takes an array as its only argument and removes the last element.
//Your function should return the entire array, and it should mutate
//the array.

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

// function in arrays.js called removeElementFromEndOfArray that takes
// an array as its only argument and removes the last element.
//Your function should return the entire array, and it should not
//mutate the array.

function removeElementFromEndOfArray(arr) {
  var newArr = arr.slice(0, -1);
  return newArr;
}
