var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, element) {
  var array2 = [element, ...array];
  return array2;

}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  array1 = [...array, element];
  return array1
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  t = array[index];
  return t
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}
function removeElementFromBeginningOfArray(array){
  t = array.slice(1)
  return t
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
array1 = array.slice(0, array.length - 1)
  return array1
}
