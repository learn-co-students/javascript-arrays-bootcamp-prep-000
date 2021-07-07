var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
//CORRECT
function addElementToBeginningOfArray(array, element) {
  array = [];
  array[1] = array.push(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  array[array.length] = element
  return array
}
//CORRECT
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  array = array[index];
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
//CORRECT
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length -1);
  return array;
}
