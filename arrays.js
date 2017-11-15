var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var chocolateString = "foo"
function addElementToBeginningOfArray(chocolateBars, chocolateString) {
  return [chocolateString, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolateString) {
  chocolateBars.unshift(chocolateString)
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, chocolateString) {
  return [...chocolateBars, chocolateString];
}
function destructivelyAddElementToEndOfArray(chocolateBars, chocolateString) {
  chocolateBars.push(chocolateString);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice (1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}
function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
