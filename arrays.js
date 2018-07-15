var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var newChoc ='reeses';

function addElementToBeginningOfArray(chocolateBars, newChoc) {
  return [newChoc, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newChoc) {
  chocolateBars.unshift(newChoc);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, newChoc) {
  return [...chocolateBars, newChoc];
}

function destructivelyAddElementToEndOfArray(chocolateBars, newChoc) {
  chocolateBars.push(newChoc);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
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
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
