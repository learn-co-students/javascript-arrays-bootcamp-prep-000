chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, element){
  arr2 = [element, ...arr];
  return arr2;
}
function addElementToEndOfArray(arr, element) {
  arr2 = [...arr, element];
  return arr2;
}
function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}
function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}
function accessElementInArray(arr, index) {
  return arr[parseInt(index, 10)];
}
function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}
function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
