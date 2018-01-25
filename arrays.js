var chocolateBars = ['snickers', 'hundred grand','kitkat', 'skittles'];
var chocolateCandy = "foo";
// .push appends on element onto the end of the Array
// .unshift takes an element of the beginning

function addElementToBeginningOfArray(chocolateBars, chocolateCandy) {
  return [chocolateCandy, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolateCandy) {
  chocolateBars.unshift(chocolateCandy);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, chocolateCandy) {
  return [...chocolateBars, chocolateCandy];
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolateCandy) {
  chocolateBars.push(chocolateCandy);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift(chocolateBars);
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

