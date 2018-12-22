var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1, 2, 3];
var element = 'foo';


function addElementToBeginningOfArray(array, element) {
  [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
 
function addElementToEndOfArray(array, element) {
   [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  array[2];
  return array;
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
  array.slice(-2);
//array.slice(1);  
  return array;
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
  return array;
}


//                  CHANGE Arrays:
// push - adds an element at the end of an array
// unshift - adds an element to the beginning of an array
// add element at any index. Will create space if array isn't long enough.

//                CREATE NEW Arrays:
// spread operator - adds element to the beginning or end of an array.
// add element at any index. Will create space if array isn't long enough.








