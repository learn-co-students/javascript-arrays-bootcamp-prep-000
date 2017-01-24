var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  return [element, ...array];
}
function destructivelyAddElementToEndofArray(array,element) {
   array.unshift(element);
   return array;
}

function addElementToEndOfArray(array,element) {
  return [array, ...element];
}
function destructivelyAddElementToEndofArray(array,element) {
   array.push(element);
   return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningofArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndofArray(array) {
  return array.slice(0, array.length -1);
}
