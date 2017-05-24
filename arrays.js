
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, foo) {
  return ['foo', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
  chocolateBars.unshift('foo');
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, foo) {
  return [...chocolateBars, 'foo'];
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo) {
  chocolateBars.push('foo');
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift(0);
 return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function removeElementFromEndOfArray(array) {
   array.slice(0, array.length - 1)
   return array.slice(0, array.length - 1)
 }
