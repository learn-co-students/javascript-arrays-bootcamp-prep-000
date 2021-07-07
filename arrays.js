var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var candyString = 'foo'
function addElementToBeginningOfArray(chocolateBars, candyString) {
 return [candyString, ... chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString)
  return chocolateBars
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {
  chocolateBars.shift();
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
  chocolatebars.pop();
  return chocolateBars;
}
function removeElementFromEndofArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.Length - 1);
}