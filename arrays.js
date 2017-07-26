// TODO: In arrays.js, define a variable called chocolateBars.
//Its value should be an array of the strings snickers, hundred grand, kitkat, and skittles.

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

/*
TODO: In arrays.js, define two functions, addElementToBeginningOfArray and destructivelyAddElementToBeginningOfArray.
Both functions take two parameters, an array and an element to add to the beginning of the array,
 and both functions should add the element to the beginning of the array and then return the whole array.
  The destructive function, destructivelyAddElementToBeginningOfArray, should alter the original array that's passed in;

  addElementToBeginningOfArray, on the other hand, should return a new array and not modify the original.
TODO: Define two more functions, addElementToEndOfArray and destructivelyAddElementToEndOfArray.
These functions also take two arguments, an array and an element to add to the end of the array.
addElementToEndOfArray should not alter the original array;
destructivelyAddElementToEndOfArray should alter the original array.
*/

function addElementToBeginningOfArray(arr, elem) {
  return [elem, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem) {
  return [...arr, elem];
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem);
  return arr;
}

/*
TODO: Define a function in arrays.js called accessElementInArray.
The function should accept an array and
an index and return the element at that index.
*/

function accessElementInArray(arr, index) {
  return arr[index];
}

/*
TODO: Define a function in arrays.js called destructivelyRemoveElementFromBeginningOfArray
that takes an array as its only argument and removes the first element.
Your function should then return the entire array, and it should mutate the array.
*/
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}
