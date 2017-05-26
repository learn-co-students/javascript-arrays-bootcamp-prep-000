var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  var newarray = [element, ...array];
  return newarray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element) {
  var anothernewarray = [...array, element];
  return anothernewarray;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function accessElementInArray(array, index) {
  return array[index];
}
function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift();
  return array;
}
function removeElementFromEndOfArray(array){
  var newerarray = array.slice(0, array.length-1);
  return newerarray;
}
function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop();
  return array;
}
