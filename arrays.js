var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element) {
  array = [1];
  var array2 = ['foo', ...array];
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return array;
}

function addElementToEndOfArray (array, element) {
  array = [1];
  var array2 = [...array,'foo'];
  return array2;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push('foo');
  return array;
}

function accessElementInArray (array, element) {
  return array[element];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1);
}