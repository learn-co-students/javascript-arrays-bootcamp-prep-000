var chocolateBars = ['snickers', 'hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array, element) {
  var new_array = array.slice();
  new_array.unshift(element);
  return new_array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var new_array = array.slice();
  new_array.push(element);
  return new_array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
    return parseInt(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  new_array = array.slice();
  new_array.shift();
  return new_array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  new_array = array.slice(0, array.length - 1);
  return new_array;
}
