var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [1];
function addElementToBeginningOfArray(array, element) {
  array = [element,...array];
  return array;
}
addElementToBeginningOfArray(array, "foo");

var array = [1];
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray(array, "foo");

var array = [1];
function addElementToEndOfArray(array, element) {
  array = [...array, element];
  return array;
}
addElementToEndOfArray(array, "foo");

var array = [1];
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
destructivelyAddElementToEndOfArray(array, "foo");

var array = [1,2,3];
function accessElementInArray(array, index){
  return array[index];
}
accessElementInArray(array, 2);

var array = [1,2,3];
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift();
  return array;
}
destructivelyRemoveElementFromBeginningOfArray(array, 1);

var array = [ 1, 2, 3 ];
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}
removeElementFromBeginningOfArray(array);

var array = [ 1, 2, 3 ];
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(2);
  return array;
}
destructivelyRemoveElementFromEndOfArray(array);

var array = [1,2,3];
function removeElementFromEndOfArray(array, index){
  newArray = array.slice(0, array.length-1);
  return newArray;
}
removeElementFromEndOfArray(array, 1);
