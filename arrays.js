var chocolateBars = ["snickers",
"hundred grand",
"kitkat",
"skittles"]


var array = [1]
var element = 'foo'

function addElementToBeginningOfArray(array, element) {
return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element);
return array;
}

function addElementToEndOfArray(array, element) {
return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element);
return array;
}

var array = [1, 2, 3]
index = 2
function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}