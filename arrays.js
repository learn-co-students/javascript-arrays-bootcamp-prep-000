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

//I got pretty far, I should be proud of myself. Reread this portion of lesson and try again tomorrow.
function addElementToEndOfArray(array, element) {
  array[3]
}

function destructivelyAddElementToEndOfArray(array, element) {
  
}

function accessElementInArray(array, index) {
  console.log(array);
//Not too sure about this function!
}

accessElementInArray(array, 2);
//Or this call!

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array.slice(0);
  return array;
//"return the 'entire' array in the same line and *should not* mutate the original array"
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
  return array;
}










