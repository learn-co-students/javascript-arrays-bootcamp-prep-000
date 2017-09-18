
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

var cities = ["Paris", "Milan", "Tokyo"];

["New York", ...cities]

cities

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var thirdArray = array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  array = array.concat(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var fifthArray = array.push(element);
  return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var sixthArray = array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var seventhArray = array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array; 
}
