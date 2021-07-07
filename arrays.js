var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var myArray = [element, ...array];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;  
} 

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
} 

const a = [1,];
b = "rov"
console.log(addElementToEndOfArray(a,b))



function accessElementInArray(array, index) {
  return array[index];
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
  return array;
}

function removeElementFromEndOfArray(array) {
  var myArray = array.slice(0, array.length - 1);
  return myArray;
}
