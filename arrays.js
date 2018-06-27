var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, addition) {
  return [addition, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addition) {
  chocolateBars.unshift(addition);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, addition) {
  return [...chocolateBars, addition];
}

function destructivelyAddElementToEndOfArray(chocolateBars, addition) {
  chocolateBars.push(addition);
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
  newChocolateBars = chocolateBars.slice(1);
  return newChocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  newChocolateBars = chocolateBars.slice(0, chocolateBars.length - 1);
  return newChocolateBars;
}