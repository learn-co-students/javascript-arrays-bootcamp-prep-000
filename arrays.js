var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return array = [element, ...array];
}
addElementToBeginningOfArray(array, "foo");

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray(array, "foo");

function addElementToEndOfArray(array, element) {
  return array = [...array, element];
}
addElementToEndOfArray(array, "foo");

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
destructivelyAddElementToEndOfArray(array, "foo");

function accessElementInArray(array, index) {
  return (array[index]);
}
accessElementInArray(array, 1);

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}
destructivelyRemoveElementFromBeginningOfArray();

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}
removeElementFromBeginningOfArray();

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
destructivelyRemoveElementFromEndOfArray();

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
}
removeElementFromEndOfArray();
