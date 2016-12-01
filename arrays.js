var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}


function addElementToEndOfArray(array, element) {
  var NewArray;
  NewArray = [...array, element];
  return NewArray;
}

function addElementToBeginningOfArray(array, element) {
  var NewArray;
  NewArray = [element, ...array];
  return NewArray;
}
