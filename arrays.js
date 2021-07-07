var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToBeginningOfArray(array, element) {
  var arr = array.slice(0, array.length);
  arr.unshift(element);
  return arr; 
} 

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var arr = array.slice(0, array.length);
  arr.push(element);
  return arr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
 }

function entFromBeginningOfArray(array) {
  array.slice(1);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var arr = [...array];
  arr.shift();
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
  return array;
}

function removeElementFromEndOfArray(array) {
  var arr = [...array];
  arr.pop()
  return arr;
}