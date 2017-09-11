var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  return ['foo', ...[1]];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...[1], 'foo'];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
}
