var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var moreChoco = 'foo';

function addElementToBeginningOfArray(chocolateBars, moreChoco) {
  //
  return [moreChoco, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, moreChoco) {
  chocolateBars.unshift('foo');
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, moreChoco) {
  //
  return [...chocolateBars, moreChoco];
}

function destructivelyAddElementToEndOfArray(chocolateBars, moreChoco) {
  chocolateBars.push('foo');
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
  //
  chocolateBars.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  //
  chocolateBars.slice(0, chocolateBars.length -1);
  return chocolateBars;
}

