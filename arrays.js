var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray (array, element) {
  var oo = [element, ...array];
  return oo;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  var oo = [...array, element];
  return oo;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array
}

var accessElementInArray = (array, index) => array[index];

var removeElementFromBeginningOfArray = array => array.slice(1)

var removeElementFromEndOfArray = array => array.slice(0,array.length -1)
