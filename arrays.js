var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1];
var element = 'foo';

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function accessElementInArray(array, index) {
  console.log(array);
//Not too sure about this function!
}

accessElementInArray(array, 0);
//Or this call!

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}