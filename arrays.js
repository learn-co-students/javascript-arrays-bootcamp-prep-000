var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
// don't modify array, add element to beginning
function addElementToBeginningOfArray (array, element) {
  var newArray = [element, ...array];
  return newArray;
}
// add element to beginning, alter the original array
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}
// add element to end of array, don't modify original
function addElementToEndOfArray (array, element) {
  var newArray = [...array, element];
  return newArray;
}
// add element to end of array, alter original
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}
// return element at given index
function accessElementInArray (array, index) {
  return array[index];
}
// remove element from beginning, alter original
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}
// remove element from beginning, don't alter 'slice(1) simply takes away first element'
function removeElementFromBeginningOfArray (array) {
  array = array.slice(1);
  return array;
}
// remove element from end, alter original
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}
// remove element from end of array, don't alter
function removeElementFromEndOfArray (array) {
  array = array.slice(0, -1);
  return array;
}
