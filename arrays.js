var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var myArray = [element, ...array];
  return myArray;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element) {
  var myArray = [...array, element];
  return myArray;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
}
function removeElementFromBeginningOfArray(array) {
  var myArray = array.slice(1);
  return myArray;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
  var myArray = array.slice(0, array.length - 1);
  return myArray;
}