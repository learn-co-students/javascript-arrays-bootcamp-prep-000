var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(chocolateBars, milkyway) {
  return [milkyway, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, milkyway){
  chocolateBars.unshift(milkyway);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, milkyway) {
  return [...chocolateBars, milkyway]
}

function destructivelyAddElementToEndOfArray(chocolateBars, milkyway) {
  chocolateBars.push(milkyway);
  return chocolateBars;
}

function accessElementInArray(chocolateBars) {
  return chocolateBars[2]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1)
}
