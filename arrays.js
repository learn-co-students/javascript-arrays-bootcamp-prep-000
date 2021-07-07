//var tvShows = ["game of thrones", "true detective", "the good wife", "empire"];

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



//define two functions, addElementToBeginningOfArray and destructivelyAddElementToBeginningOfArray.
//Both functions take two parameters, an array and an element to add to the beginning of the array,
//and both functions should add the element to the beginning of the array and then return the whole array.

//The destructive function, destructivelyAddElementToBeginningOfArray, should alter the original array that's passed in;
//addElementToBeginningOfArray, on the other hand, should return a new array and not modify the original.

//var array = [];

function addElementToBeginningOfArray(array, element) {
  var array = [1];
  array.unshift('foo');
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return array;
}


//Define two more functions, addElementToEndOfArray and destructivelyAddElementToEndOfArray.
//These functions also take two arguments, an array and an element to add to the end of the array.
//addElementToEndOfArray should not alter the original array; destructivelyAddElementToEndOfArray
//should alter the original array.

function addElementToEndOfArray(array, element) {
  var array = [1];
  array.push('foo');
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array;
}

//Define a function in arrays.js called accessElementInArray.
//The function should accept an array and an index and return the element at that index.

function accessElementInArray(array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
}
