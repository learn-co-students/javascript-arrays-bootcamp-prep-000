var chocolateBars = new array ([ 'snickers', 'hundred grand', 'kitkat', 'skittles']);

function addElementToBeginningOfArray(array, element) {
  chocolateBars = ["hersheys", ... chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars.unshift (`hersheys`);
}

function addElementToEndOfArray(array, element) {
  chocolateBars = [...chocolateBars, `hersheys`];
}

function destructivelyAddElementToEndOfArray(array, element) {
  chocolateBars.push (`hersheys`);
}

function accessElementInArray() {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray() {
  chocolateBars.shift;
  return chocolateBars[];
}
