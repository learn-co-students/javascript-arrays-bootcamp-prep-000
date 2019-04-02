var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = function(chocolateBars, newBar) {
  return [newBar, ...chocolateBars];
}

var destructivelyAddElementToBeginningOfArray = function(chocolateBars, newBar) {
  chocolateBars.unshift(newBar);
  return chocolateBars;
}

var addElementToEndOfArray = function(chocolateBars, newBar) {
  return [...chocolateBars, newBar];
}

var destructivelyAddElementToEndOfArray = function(chocolateBars, newBar) {
  chocolateBars.push(newBar);
  return chocolateBars;
}

var accessElementInArray = function(array, index) {
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

var removeElementFromBeginningOfArray = function(chocolateBars) {
  return chocolateBars = chocolateBars.slice(1);
}

var destructivelyRemoveElementFromEndOfArray = function(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

var removeElementFromEndOfArray = function(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
