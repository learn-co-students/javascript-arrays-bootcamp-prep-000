var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, newBar) {
  var newArray = [newBar, ...chocolateBars];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newBar) {
  chocolateBars.unshift(newBar);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, newBar) {
  var newArray = [...chocolateBars, newBar];
  return newArray;
}

function destructivelyAddElementToEndOfArray(chocolateBars, newBar) {
  chocolateBars.push(newBar);
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
  return chocolateBars.slice(0, chocolateBars.length -1);
}

removeFromMiddle = [...chocolateBars.slice(0, 3), ...chocolateBars.slice(4)]