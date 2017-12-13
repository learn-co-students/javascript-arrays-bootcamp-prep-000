var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"  
];

function addElementToBeginningOfArray(array, elt) {
  return [elt, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, elt) {
  array.unshift(elt);
  return array;
}

function addElementToEndOfArray(array, elt) {
  return [...array, elt];
}

function destructivelyAddElementToEndOfArray(array, elt) {
  array.push(elt);
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
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}










