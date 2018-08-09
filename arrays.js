//var array1 = ["thing 0", "thing 1", "thing 2", "thing 3"]

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array];
  return newArray;
}


function addElementToEndOfArray(array, element) {
  anotherArray = [...array, element];
  return anotherArray;
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  var index;
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  lessor = array.shift(1);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  frank = array.slice(1)
  return frank;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  leftovers = array.pop(1)
  return array
}

function removeElementFromEndOfArray(array){
  sybil = array.slice(0, array.length -1)
  return sybil;
}
