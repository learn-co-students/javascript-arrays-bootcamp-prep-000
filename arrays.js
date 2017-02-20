var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittle'
]

function addElementToBeginningOfArray(array, newElement) {
  var newArray = [newElement, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, newElement) {
  array = [newElement, ...array];
  return array;
}

function addElementToEndOfArray(array, newElement) {
  var newArray = [...array, newElement];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, newElement) {
  array = [...array, newElement];
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
  var truncatedArray = array.slice(1);
  return truncatedArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1)
}
