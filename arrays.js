var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";


var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray (array, element) {
var newarray = [element, ...array];
return newarray;
} 

function destructivelyAddElementToBeginningOfArray (array, element) {
array.unshift (element);
return array;
}

function addElementToEndOfArray (array, element) {
var newarray = [...array, element];
return newarray;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push (element);
  return array;
}

function accessElementInArray (array, index) {
return array [2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift ();
return array;
}

function removeElementFromBeginningOfArray(array) {
  var newarray = array.slice(1);
  return newarray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop ();
  return array;
}

function removeElementFromEndOfArray(array) {
  var newarray = array.slice(0, array.length -1);
  return newarray;
}

