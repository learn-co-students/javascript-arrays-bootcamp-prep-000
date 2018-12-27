var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element) {
  [...chocolateBars, "foo"];
  return chocolateBars;  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars.unshift();
  return chocolateBars.unshift();
}

function addElementToEndOfArray(array, element) {
  return chocolateBars.push("foo", 1);
}

function destructivelyAddElementToEndOfArray(array, [skittles]) {
  return [...chocolateBars];
}

function accessElementInArray(array, index) {
  return index(2);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.shift();
}

function removeElementFromBeginningOfArray(array) {
  return chocolateBars.shift(0);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return chocolateBars.pop(0,1,2);
}

function removeElementFromEndOfArray(array) {
  return chocolateBars.pop();
}





















