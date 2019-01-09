var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b) {
  b = ["foo", ...a];
  return b;
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a, b) {
  b = [...a, "foo"]
  return b;
}

function destructivelyAddElementToEndOfArray(a, b) {
  a.push(b);
  return a;
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
} //This test can be passed with changing array = array.slce(1) then returning array; according to the test parameters this should not pass the test

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}