var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var gummys = "foo";

function addElementToBeginningOfArray(chocolateBars, gummys) {
  return [gummys, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, gummys) {
  chocolateBars.unshift(gummys);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, gummys) {
  return [...chocolateBars, gummys]
}

function destructivelyAddElementToEndOfArray(chocolateBars, gummys) {
  chocolateBars.push(gummys);
  return chocolateBars;
}

function accessElementInArray(chocolateBars){
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(1)
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop(-1);
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(0, chocolateBars.length -1);
  return chocolateBars;
}