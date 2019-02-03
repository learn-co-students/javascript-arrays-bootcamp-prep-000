var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}


function destructivelyAddElementToBeginningOfArray(arr, elementN) {
  array.unshift(elementN)
  return arr
}


function addElementToEndOfArray(array, element) {
  return [...array, element];
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}


function accessElementInArray(array, index){
  return array[index];
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}


functionremoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
