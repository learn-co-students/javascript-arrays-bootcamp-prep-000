var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  var hardAr = ["foo", ...array];
  return hardAr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo");
  return array;
}

function addElementToEndOfArray(array, element) {
  var hardAr = [...array, "foo"];
  return hardAr;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push("foo");
  return array;
}

function accessElementInArray(array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromBeginningOfArray(array){
      return array.slice(1);
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}