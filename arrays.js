var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
arrayNew = [element, ...array];
return arrayNew;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element) {
  arrayNew = [...array, element];
  return arrayNew;
}
function destructivelyAddElementToEndOfArray(array, element) {
  //array = [1];
  //element = 'foo';
  array.push(element);
  return array;
}
function accessElementInArray(array, index) {
  array = [1, 2, 3];
  index = 2;
  return array[2];
}
function removeElementFromBeginningOfArray(array) {
  array = [1, 2, 3];
  arrayNew = array.slice(1);
  return arrayNew;
}
function removeElementFromEndOfArray(array) {
  array = [1, 2, 3];
  arrayNew = array.slice(0, array.length -1);
  return arrayNew;
}
