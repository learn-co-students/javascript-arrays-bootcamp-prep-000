var chocolateBars = [
  'snickers',
  'hundred brand',
  'kitkat',
  'skittles',
]

function addElementToBeginningOfArray(array, element) {
  array1 = [element, ...array];
  return array1;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  array1 = [...array, element];
  return array1;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  element = array[index];
  return element;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array) {
  array1 = array.slice(1)
  return array1;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
