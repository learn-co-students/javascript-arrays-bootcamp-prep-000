var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
chocolateBars;
var newBar = "foo";

function addElementToBeginningOfArray(chocolateBars, newBar) {
  return [newBar, ...chocolateBars]; 
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newBar) {
  chocolateBars.unshift(newBar);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, newBar) {
  return [...chocolateBars, newBar];
}

function destructivelyAddElementToEndOfArray(chocolateBars, newBar) {
  chocolateBars.push(newBar);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index) {
  return (chocolateBars[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1);
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray (chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length-1);
}