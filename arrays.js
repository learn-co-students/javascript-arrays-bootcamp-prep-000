var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  var array = [1];
  array = ["foo", ...array];
  return array
}

var string = "foo";
var array = [1]

function destructivelyAddElementToBeginningOfArray(array, string) {
  array.unshift(string);
  return array
}

function addElementToEndOfArray(array, string) {
  array = [...array, string]
  return array
}

function destructivelyAddElementToEndOfArray(array, string){
  array.push(string)
  return array
}

var array = [1, 2, 3]

function accessElementInArray(array) {
  return array[2]
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
  return array
}



function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);

}
/*
function middle() {
  var items = [1, 2, 3, 4, 5];
 
// let's remove the third element
 
// a slice from the start up to but not including index 2 (the third element)
// and a slice from index 3 to the end
[...items.slice(0, 2), ...items.slice(3)];
// [1, 2, 4, 5]
}
*/