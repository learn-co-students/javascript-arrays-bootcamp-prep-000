var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = ["foo"];

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [candyString, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, candyString) {
  return [...chocolateBars, candyString];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.push(candyString);
  return chocolateBars;
}
function accessElementInArray(chocolateBars, n) {
  return chocolateBars[n];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1);
}