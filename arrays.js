var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, newElement) {
  var arrayNew = [newElement, ...array];
  return arrayNew;
}
function destructivelyAddElementToBeginningOfArray(array, newElement) {
  array.unshift(newElement);
  return array;
}

function addElementToEndOfArray(array, newElement) {
  var arrayNew = [...array, newElement];
  return arrayNew;
}

function destructivelyAddElementToEndOfArray(array, newElement) {
  array.push(newElement);
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
  arrayNew = array.slice(1);
  return arrayNew;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  arrayNew = array.slice(0, array.length - 1);
  return arrayNew;
}
