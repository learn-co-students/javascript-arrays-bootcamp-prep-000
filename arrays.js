var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArr = [...array, element];
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  var arrElement = array[index];
  return arrElement;
}

function removeElementFromEndOfArray(array) {
  var newArr = array.slice(0, array.length - 1);
  return newArr;
}

function removeElementFromBeginningOfArray(array) {
  var newArr = array.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
