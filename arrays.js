var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  return ["foo", ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo");
  return array;
}
function addElementToEndOfArray(array, element) {
  return [...array, "foo"];
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo");
  return array;
}
function accessElementInArray(array, element) {
  return array[element];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1);
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
  return array.slice(0, array.length-1);
}




