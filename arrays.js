var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  var newArr = [element, ... array];
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
[...array, element];
  return array;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array, index){
var arrItem = array[index];
return arrItem;
}
function destructivelyAddElementToBeginningOfArray(array){
  array.unshift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  var newArr = array.slice(1);
  return newArr;
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  var newArr =array.slice(0, array.length - 1);
  return newArr;
}
