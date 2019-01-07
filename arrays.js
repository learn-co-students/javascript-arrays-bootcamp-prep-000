var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars = ["Almond Joy", ...chocolateBars];

console.log(chocolateBars.shift());
console.log(chocolateBars);

function addElementToBeginningOfArray(array, element) {
  return newArray = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return newArray2 = [...array, element];
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return newArray = array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return newArray = array.slice(0, array.length - 1);
}