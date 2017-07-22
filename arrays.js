chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, element) {
  var arr2 = arr;
  arr.unshift(element);
  return arr2
}
function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}
function addElementToEndOfArray(arr, element) {
  var arr2 = arr;
  arr2.push(element);
  return arr2;
}
function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr
}
function accessElementInArray(arr, i) {
  return arr[i];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr;
}
function removeElementFromEndOfArray(arr) {
  return arr.slice(0,arr.length-1);
}
