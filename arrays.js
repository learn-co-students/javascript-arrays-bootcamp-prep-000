var chocolateBars = ["snickers", "hundred grand",  "kitkat", "skittles"];
function  addElementToBeginningOfArray(array, element){
  var array = [element, ...array];
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function accessElementInArray(array,index){
  return (array[index]);
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  var shortArrayBegin = array.slice(1);
  return shortArrayBegin;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
  var shortArrayEnd = array.slice(0, array.length - 1);
  return shortArrayEnd;
}
function addElementToEndOfArray(array,element){
var newArrayEnd = [...array, element]
return newArrayEnd
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
