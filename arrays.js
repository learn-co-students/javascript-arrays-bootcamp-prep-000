var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  let arrayy = array.slice();
  arrayy.unshift(element);
  return arrayy;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  let arrayy = array.slice();
  arrayy.push(element);
  return arrayy;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array, element) {
  let arrayy = array.slice();
  arrayy.shift(element);
  return arrayy;
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array, element) {
  let arrayy = array.slice();
  arrayy.pop();
  return arrayy;
}