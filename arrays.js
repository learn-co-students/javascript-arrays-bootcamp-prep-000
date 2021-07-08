var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, item) {
  return [item, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, item) {
  return array.unshift(item);
}

function addElementToEndOfArray(array, item) {
 return [...array, item]; 
}

function destructivelyAddElementToEndOfArray(array, item) {
  return array.push(item);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 return array.shift();
 
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray() {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}