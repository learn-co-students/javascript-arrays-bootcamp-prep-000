function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

function addElementToEndOfArray() {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray() {
  array = [...array, element];
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
