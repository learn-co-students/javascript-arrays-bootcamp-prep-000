var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [1]

function addElementToBeginningOfArray() {
  ['foo', ...array]
	return (['foo', 1])
}

var array = [1]

function destructivelyAddElementToBeginningofArray() {
  ['foo', ...array];
  return (['foo', 1]);
}

var array = [1]

function addElementToEndOfArray() {
  [1, ...'foo'];
  return ([1, 'foo']);
}

var array = [1]

function destructivelyAddElementToEndOfArray() {
  array.push('foo');
  return ([1, 'foo']);
}

var array = [1,2,3]

function accessElementInArray() {
	console.log (array[2]);
}

var array = [1,2,3]

function removeElementFromBeginningOfArray() {
  array.shift([1])
  return([2,3])
}

var array = [1,2,3]

function removeElementFromEndOfArray() {
  array.slice([2]);
  return([1,2]);
}
