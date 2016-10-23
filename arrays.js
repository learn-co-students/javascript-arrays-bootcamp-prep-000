var chocolateBars = ["snickers" , "hundred grand" , "kitkat" , "skittles"];

function addElementToBeginningOfArray (array, item) {
  return newArray = [item, ...array];
}
function destructivelyAddElementToBeginningOfArray (array, item) {
  array.unshift(item);
  return array;
}
function addElementToEndOfArray(array, item) {
  return newArray2 = [...array, item];
}
function destructivelyAddElementToEndOfArray (array, item) {
  array.push(item);
  return array;
}
function accessElementInArray(array,index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray (array) {
  var newArray3 = array.slice(1);
  return newArray3;
}
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray (array) {
  var newArray4 = array;
  newArray4.pop();
  return newArray4;
}
