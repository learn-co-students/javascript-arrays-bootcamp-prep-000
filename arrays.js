var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const result = [element, ...array];
  return result;
} 

function destructivelyAddElementToBeginningOfArray(array, element) {
  var modify = array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  const result2 = [...array, element];
  return result2;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var modify2 = array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  var access = array[index];
  return access;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var remove = array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var noMutate = array.slice(1);
  return noMutate;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var destroy = array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var noDestroy = array.slice(0, array.length - 1);
  return noDestroy;
}