var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  const newArray = array;
  array.unshift(element);
  return newArray;
}
function addElementToEndOfArray(array, element) {
  const newArray = [...array, element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(array, element) {
  const newArray = array;
  array.push(element);
  return newArray;
}
function accessElementInArray(array, index) {
  return array[index];
}
function removeElementFromBeginningOfArray(array) {
  const newArray = [...array];
  newArray.shift(0);
  return newArray;
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0);
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.splice(-1, 1);
  return array;
}
function removeElementFromEndOfArray(array) {
  newArray = [...array];
  newArray.splice(-1, 1);
  return newArray;
}