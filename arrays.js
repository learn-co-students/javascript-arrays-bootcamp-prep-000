var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, ele) {
  return [ele, ...arr];
}

function destructivelyAddElementToBeginningOfArray (arr, ele) {
  arr.unshift(ele);
  return arr;
}

function addElementToEndOfArray (arr, ele) {
  return [...arr, ele];
}

function destructivelyAddElementToEndOfArray (arr, ele) {
  arr.push(ele);
  return arr;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift(0);
  return array;
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, -1);
}