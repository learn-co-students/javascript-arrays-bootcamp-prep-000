function addElementToBeginningOfArray(arg1, arg2) {
  return [arg2, ...arg1];
}

function destructivelyAddElementToBeginningOfArray(arg1, arg2) {
  arg1.unshift(arg2);
  return arg1
}

function addElementToEndOfArray(arg1, arg2) {
  return [...arg1, arg2];
}

function destructivelyAddElementToEndOfArray(arg1, arg2) {
  arg1[arg1.length] = arg2;
  return arg1;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  // newarray = array;
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function chocolateBars() {
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}
