var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];
var newElement;

function addElementToBeginningOfArray(chocolateBars, newElement) {
  chocolateBars = [newElement, ...chocolateBars];
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newElement) {
  chocolateBars.unshift(newElement);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,newElement) {
  chocolateBars = [...chocolateBars, newElement];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars,newElement) {
  chocolateBars.push(newElement);
  return chocolateBars;
}

function accessElementInArray(chocolateBars) {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1);
  return chocolateBars;
}