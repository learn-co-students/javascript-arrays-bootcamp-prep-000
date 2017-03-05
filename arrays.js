var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'snickers'];

function addElementToBeginningOfArray(array, el) {
  var newArray = [el, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, el) {
  array.unshift(el);
  return array;
}

function addElementToEndOfArray(array, el) {
  var newArray = [...array, el];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, el) {
  array.push(el);
  return array;
}

function accessElementInArray(array, i) {
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift();
 return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}
