var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element) {
  return [element, array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars.unshift(element);
}

function addElementToEndOfArray(array, element) {
  return chocolateBars.push(element);
}

function accessElementInArray(array, element) {
  return chocolateBars[1];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  return chocolateBars.shift(element);
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  return chocolateBars.pop(element);
}

function removeElementFromEndOfArray(array, element) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
