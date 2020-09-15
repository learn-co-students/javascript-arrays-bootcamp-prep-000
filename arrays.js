var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, string) {
  return [string, ...chocolateBars];
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, string) {
  chocolateBars.unshift(string);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, string) {
  return [...chocolateBars, string];
}

function destructivelyAddElementToEndOfArray(chocolateBars, string) {
  chocolateBars.push(string);
  return chocolateBars
}

function accessElementInArray(chocolateBars) {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, string) {
  chocolateBars.shift(string);
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars, string) {
  chocolateBars = chocolateBars.slice(1)
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars, string) {
  chocolateBars.pop(string);
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars, string) {
  chocolateBars = chocolateBars.slice(0, chocolateBars.length -1)
  return chocolateBars;
}

