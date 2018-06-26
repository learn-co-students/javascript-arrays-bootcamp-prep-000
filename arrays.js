var chocolateBars = ['snickers, hundred grand, kitkat, skittles'];

function addElementToBeginningOfArray() {
  var numbers = [1];
  numbers.unshift('foo');
  return numbers;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray() {
var myarray = [1];
myarray.push("foo");
return myarray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function accessElementInArray(array, index) {
  return array[2];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
} 
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1);
}

