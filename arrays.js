var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = ['u', 'r', 'p', 'l', 'e'];
var element = ['p'];
var addElementToBeginningOfArray = function(array, element) {
  return [element, ...array];
}
var array1 = [1, 2, 3];
var element1 = [0];
var destructivelyAddElementToBeginningOfArray = function(array1, element1) {
  array1.unshift(element1);
  return array1;
}
var array69 = ['Walter', 'Pepper', 'Mr. Pussy'];
var index = 2;
var accessElementInArray = function(array69, index) {
  return array69[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array2) {
  var arrray2 = [1, 2, 3, 4];
  return array2.shift();
}

var array3 = [69, 420, 90210, 666];
function removeElementFromBeginningOfArray(array3) {
  return array3.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array4) {
  var array4 = [23, 4, 98, 9];
  var newArray4 = array4.pop();
  return newArray4;
}
var array5 = [33, 8, 9409];
var removeElementFromEndOfArray = function(array5) {
  return array5.slice(0, 2);
}

var array8 = [1, 2, 3];
var element8 = [4];
var destructivelyAddElementToEndOfArray = function(array8, element8) {
  array8.push(element8);
  return array8;
}

var array7 = [2, 3, 4];
var element7 = [5];
function addElementToEndOfArray(array7, element7) {
  return [...array7, element7];
}
