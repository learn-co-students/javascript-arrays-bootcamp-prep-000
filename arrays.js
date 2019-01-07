
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var candy = "foo"

function addElementToBeginningOfArray(chocolateBars, candy) {
  return ["foo", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candy) { 
  chocolateBars.unshift("foo");
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, candy) {
  return [...chocolateBars, "foo"];
}

function destructivelyAddElementToEndOfArray(chocolateBars, candy) {
  chocolateBars.push("foo");
  return chocolateBars
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(1);
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}