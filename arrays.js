var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles']
var Cadburry = 'foo';

function addElementToBeginningOfArray(chocolateBars, Cadburry) {
  return [Cadburry,...chocolateBars];
}

function  destructivelyAddElementToBeginningOfArray(chocolateBars, Cadburry) {
  chocolateBars.unshift(Cadburry);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, Cadburry) {
  return [...chocolateBars,Cadburry];
}

function destructivelyAddElementToEndOfArray(chocolateBars,Cadburry) {
  chocolateBars.push(Cadburry);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars,Cadburry) {
  chocolateBars.shift(Cadburry);
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
  chocolateBars=chocolateBars.slice(0,chocolateBars.length-1);
  return chocolateBars;
}