var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array, element) {
  //use <element> ...<array> to make a new array with the new elements
  var newArray = [element, ...array];
  return newArray;
}

function addElementToEndOfArray(array, element) {
  //use ...<array> <element> to make a new array with the new elements
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  //use unshift to add elements to an array
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  //use push to add elements to an array
  array.push(element);
  return array;
}

function accessElementInArray(array,index) {
  //create a function to return the specific value of any array/index
  return array[index];
}
/*
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  //use shift to remove an element from an array
  array.shift(element);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  //use pop to remove an element from an array
  array.pop(element);
  return array;
} */

function removeElementFromBeginningOfArray(array) {
  //use slice to remove an element from an array
  var newArray = array.slice(1);
  return newArray;
}

function removeElementFromEndOfArray(array) {
  //use slice to remove elements from an array
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}
