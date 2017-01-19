var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [1]

function addElementToBeginningOfArray() {
  ['foo', ...array]
	return (['foo', 1])
}

var array = [1]

function destructivelyAddElementToBeginningofArray() {
  [1, ...'foo'];
  return (['foo', 1]);
}

var array = [1]

function addElementToEndOfArray() {
  array.push('foo');
  return ([1, 'foo']);
}

var array = [1]

function destructivelyAddElementToEndOfArray() {
  array.unshift('foo');
  return ([1, 'foo']);
}

var array = ([1,2,3], 2)

function accessElementInArray() {
  return ([3]);
}

var days = ["Monday", "Tuesday", "Wednesday"]

function destructivelyRemoveElementFromBegginingOfArray() {
  days.shift(["Monday"]);
  return (["Tuesday", "Wednesday"]);  
}

var array = [1,2,3]

function removeElementFromBeginningOfArray() {
  array.shift([1])
  return([2,3])
}

var array = [1,2,3]

function destructivelyRemoveElementFromEndOfArray() {
  array.pop([2]);
  return([1,2]);
}

var array = [1,2,3]

function removeElementFromEndOfArray() {
  array.slice([2]);
  return([1,2]);
}
