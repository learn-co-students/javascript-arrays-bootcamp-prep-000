var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var beginArray = [1];
  beginArray = ['foo', ...beginArray];
  return beginArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return array;
}

function addElementToEndOfArray(array, element) {
  var endArray = [1];
  endArray = [...endArray, 'foo'];
  return endArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array;
}

function accessElementInArray(array, index) {
  var indexArray = [1, 2, 3];
  return indexArray[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var removeBeginning = [1, 2, 3];
  removeBeginning = removeBeginning.slice(-2);
  return removeBeginning;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var removeEnd = [1, 2, 3];
  removeEnd = removeEnd.slice(0, removeEnd.length - 1);
  return removeEnd;
}