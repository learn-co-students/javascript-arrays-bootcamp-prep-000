var chocolateBars = ["sncickers", "hundred grand", "kitkat", "skittles"];

var gummies = "foo"

function addElementToBeginningOfArray(chocolateBars, gummies) {
  return [gummies, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, gummies) {
  chocolateBars.unshift(gummies);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, gummies) {
  return[...chocolateBars, gummies];
}

function destructivelyAddElementToEndOfArray(chocolateBars, gummies) {
  chocolateBars.push(gummies);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return array [index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
   chocolateBars.pop();
   return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}