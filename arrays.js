var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
[...array, element]
  return array
};
function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element)
  return array
};
function addElementToEndOfArray() {
  [element, ...array]
    return array
};
function destructivelyAddElementToEndOfArray() {
  array.push(element)
  return array
};
function accessElementInArray(array, index) {
  return array[index]
};

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
};
