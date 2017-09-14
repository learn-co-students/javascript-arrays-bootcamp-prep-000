var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];

var addElementToBeginningOfArray = function(array, element) {
  var newArray = [element,...array];
  return newArray;
}
var destructivelyAddElementToBeginningOfArray = function(array,element) {
  array.unshift(element);
  return array;
}
var accessElementInArray = function(array, index) {
  return array[index];
}
var destructivelyRemoveElementFromBeginningOfArray = function (array) {
  //was ushift
  array.unshift();
  return array;
}
var removeElementFromBeginningOfArray = function(array) {
  return array.slice(1);
  //important! doesn't alter array so return must be before splice!
}
var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop();
}
var removeElementFromEndOfArray = function(array) {
  return array.slice(0, array.length-1);
}
var addElementToEndOfArray = function (array, element) {
  var newArray = [...array, element];
  return newArray;
}
var destructivelyAddElementToEndOfArray = function (array, element) {
  //add this to notes
  array.push(element);
  return array;
}
