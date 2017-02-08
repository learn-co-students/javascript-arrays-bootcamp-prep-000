var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,element) {
  var array;
  array = [element,...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  var array;
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element) {
  var array;
  array = [...array,element];
  return array;
}

function destructivelyAddElementToEndOfArray(array,element) {
  var array;
  array.push(element);
  return array;
}

function accessElementInArray (array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  var array;
  return array.shift();
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1);
}

function removeElementFromEndOfArray (array) {
  var array;
  array.pop();
  return array;
}
