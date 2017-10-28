var chocolatebars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return ["element", ...chocolatebars];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return chocolateBars.unshift('element');
}
