var chocolateBars = ['snickers','hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray(array, element) {
  var arr2 = array.slice(0);
  arr2.unshift(element);
  return arr2;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var arr2 = [...array, element];
  return arr2;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
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
  var arr2 = [...array];
  arr2.shift();
  return arr2;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var arr2 = [...array];
  arr2.pop();
  return arr2;
}

