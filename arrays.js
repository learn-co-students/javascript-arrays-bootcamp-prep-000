var chocolateBars = [ "snickers", "hundred grand","kitkat", "skittles" ];

function addElementToBeginningOfArray(array, element) {
  var array = [1];
  return (["foo", ...array])
}

var array = [1];
var element = ("foo")
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
return array;
}

var array = [1];
function addElementToEndOfArray(array, element) {
  return ([...array, 'foo'])
}

var array = [1];
var element = ["foo"];
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

var array = [ 1, 2, 3];
function accessElementInArray(array, index) {
return array[2];
}

var array = [ 1, 2, 3];
function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()
return array;
}

var array = [ 1, 2, 3];
function removeElementFromBeginningOfArray(array) {
return array.slice(1)
}

var array = [ 1, 2, 3];
function destructivelyRemoveElementFromEndOfArray(array) {
array.pop()
return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
