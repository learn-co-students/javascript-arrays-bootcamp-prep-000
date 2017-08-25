var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
    var array = array;
    array = [element, ...array];
    return array;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
      var array = array;
      array.unshift(element);
      return array;
}

function addElementToEndOfArray (array, element) {
  var array = array;
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray (array, element) {
  var array = array;
  array.push(element);
  return array;
}

function accessElementInArray (array, index) {
  var array = array;
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array, element) {
  var array = array;
  array.shift(element);
  return array;
}

function removeElementFromBeginningOfArray (array) {
  var array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  var array = array;
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  var array = array.slice (0, array.length - 1);
  return array;
}
