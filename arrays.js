var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, ele) {
  var arr = [ele, ...array];
  return arr;
}

function destructivelyAddElementToBeginningOfArray(array, ele) {
  array.unshift(ele);
  return array;
}

function addElementToEndOfArray(array, ele) {
  var arr = [...array, ele];
  return arr;
}

function destructivelyAddElementToEndOfArray(array, ele) {
  array.push(ele);
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
  var result = array.slice(1);
  return result;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var result = array.slice(0, array.length - 1);
  return result;
}