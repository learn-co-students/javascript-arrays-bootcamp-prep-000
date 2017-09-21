// TO DO 1
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// TO DO 2
function addElementToBeginningOfArray(array, item) {
  return [item, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, item) {
  var temp = array.unshift(item); // array mutated
  return array;
}

// TO DO 2
function addElementToEndOfArray(array, item) {
  return [...array, item];
}

function destructivelyAddElementToEndOfArray(array, item) {
  var temp = array.push(item); // array mutated
  return array;
}

// TO DO 3
function accessElementInArray(array, index) {
  return array[index];
}

// TO DO 4
function destructivelyRemoveElementFromBeginningOfArray(array) {
  var temp = array.shift(); // array mutated
  return array;
}

// TO DO 5
function removeElementFromBeginningOfArray(array) {
  var temp = array.slice(1);
  return temp;
}

// TO DO 6
function destructivelyRemoveElementFromEndOfArray(array) {
  var lastItem = array.pop(); // array mutated
  return array;
}

// to do 7
function removeElementFromEndOfArray(array) {
  var arrayWithoutLast = array.slice(0, array.length - 1); // array is untouched
  return arrayWithoutLast;
}
