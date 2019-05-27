var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"];

const array = [1]

function addElementToBeginningOfArray(array, element) {
  return ["foo", ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo");
  return array;
}

function addElementToEndOfArray(array, element) {
   return [...array, "foo"]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array
}
const array1 = [1, 2, 3]
function accessElementInArray(array1, index) {
  return array1[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array1) {
  array1.shift();
  return array1;
}

function removeElementFromBeginningOfArray(array1) {
  return array1.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array1) {
  array1.pop();
  return array1;
}

function removeElementFromEndOfArray(array1) {
  return array1.slice(0, array1.length -1);
}