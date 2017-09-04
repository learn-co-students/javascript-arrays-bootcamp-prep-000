var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [];

function addElementToBeginningOfArray(array, element) {
  var array = new Array();
  [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}
