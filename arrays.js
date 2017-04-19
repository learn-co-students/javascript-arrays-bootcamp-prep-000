var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles'];

var array = [];
function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

/*function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array.slice();
  return array;
}*/