// chocolateBars Array

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

// console.log(addElementToBeginningOfArray(chocolateBars, "foo"));

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "yoyo"));

function addElementToEndOfArray(array, element) {
  array = [...array, element];
  return array;
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// console.log(destructivelyRemoveElementFromBeginningOfArray(chocolateBars));

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

// console.log(destructivelyRemoveElementFromBeginningOfArray(chocolateBars));

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
  
}

// console.log(destructivelyRemoveElementFromEndOfArray(chocolateBars));

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
  
}

// console.log(destructivelyRemoveElementFromEndOfArray(chocolateBars));

let myArray = [1, 2, 3];
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
  
}

console.log(removeElementFromEndOfArray(myArray));


