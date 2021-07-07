var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyStr = "peanuts"
function addElementToBeginningOfArray(chocolateBars, candyStr) {
  return [candyStr, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyStr) {
  chocolateBars.unshift(candyStr);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, candyStr) {
  return [...chocolateBars, candyStr]
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyStr) {
  chocolateBars.push(candyStr);
  return chocolateBars;
}
function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, candyStr) {
  chocolateBars.shift();
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}
function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length-1)
}
