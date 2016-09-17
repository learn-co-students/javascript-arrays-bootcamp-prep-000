var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, item) {
  return [item, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element);
return array;
}

function addElementToEndOfArray(array, item) {
  return [...array, item];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}
function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length - 1);
}
