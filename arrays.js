var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var candyString = 'foo';

function addElementToBeginningOfArray(array, element) {
  var begArray = [element,...array];
  return begArray;
}

function addElementToEndOfArray(array, element) {
  var endArray = [...array, element];
  return endArray;
}

function accessElementInArray(array, index) {
  var accessArray = [1,2,3,4];
  return array[2];
}

function removeElementFromBeginningOfArray(array) {
  var removeArray = [1, 2, 3];
  removeArray.shift();
  return removeArray;
}

function removeElementFromEndOfArray(array) {
  var remEndArray = [1, 2, 3];
  remEndArray.pop();
  return remEndArray;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString);
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.push(candyString);
  return chocolateBars;
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}
