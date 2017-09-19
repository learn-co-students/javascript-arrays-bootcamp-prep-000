
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element ) {
  nArray= [element, ...array];
  return nArray;
}

function destructivelyAddElementToBeginningOfArray(array, element ) {
array.unshift(element);
return array;
}

function addElementToEndOfArray(array, element) {
  nArray = [...array, element];
  return nArray;
}

function destructivelyAddElementToEndOfArray(array,element) {
array.push(element);
return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift();
return array;

}

function removeElementFromBeginningOfArray(array) {
nArray = array.slice(1);
return nArray;
}

function accessElementInArray(array, index) {
return array[index];
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);

}
