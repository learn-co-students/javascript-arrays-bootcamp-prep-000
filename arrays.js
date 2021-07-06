var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, entry) {
  arr = [entry, ...arr];
  return arr;
}
function destructivelyAddElementToBeginningOfArray(array, entry) {
 array.unshift(entry);
 return array;
}
function addElementToEndOfArray(array, entry) {
  array = [...array, entry];
  return array;
}
function destructivelyAddElementToEndOfArray(array, entry) {
  array.push(entry);
  return array;
}
function accessElementInArray(array, index) {
  return arr[index];
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
  return array;
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
function accessElementInArray(array, index) {
  return array[index];
}
