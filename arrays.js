var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = []

var element

var holder

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}



function destructivelyAddElementToBeginningOfArray(array, element) {
var myArray = [1];
  array.unshift(element);
  // var myArray = new myArray();
  return array;
}

destructivelyAddElementToBeginningOfArray(array, element)

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray (array, element) {
  var arrayDEnd = [];
  array.push(element);
  return array;
}

 function accessElementInArray(array, index) {
   return(array[index]);
 }

function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}
