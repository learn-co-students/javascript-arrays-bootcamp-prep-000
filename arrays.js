var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [0];
var element = 'foo';

var array1 = [1, 2, 3];

function addElementToBeginningOfArray(array, element) {
  var newArray = ['foo', array[0]];
  return newArray;
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}


// DO NOT alter the original array
function addElementToEndOfArray(array, element) {
  var newArray = [array[0], 'foo'];
  return newArray;
}

// ALTER the original array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array1, index) {
  return array1[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array;
}

// Not mutate
function removeElementFromBeginningOfArray() {
  array1 = array1.slice(1);
  return array1;
}

// Not mutate
function removeElementFromEndOfArray() {
  var array2 = [1, 2, 3];
  array2.pop();
  return array2;
}

//Mutate
function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element);
  return array;
}
