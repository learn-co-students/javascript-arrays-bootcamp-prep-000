var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1, 2, 3];
var element = 'foo';


function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
 
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(-2);
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1);
}


//                  CHANGE Arrays:
// push - adds an element at the end of an array
// unshift - adds an element to the beginning of an array
// add element at any index. Will create space if array isn't long enough.

//                CREATE NEW Arrays:
// spread operator - adds element to the beginning or end of an array.
// add element at any index. Will create space if array isn't long enough.








