var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newBeginning = [element, ...array]
  return newBeginning;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newEnd = [...array, element]
  return newEnd;
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

function removeElementFromBeginningOfArray(array) {
  var removeBeginning = array.slice(1);
  return removeBeginning;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}
function removeElementFromEndOfArray(array) {
  var newEnd = array.slice(0, array.length-1);
  return newEnd;
}
