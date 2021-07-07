var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray (arr, elem) {
newArr = [elem, ... arr];
return newArr;
}
function destructivelyAddElementToBeginningOfArray (arr, elem) {
  arr.unshift(elem);
  return arr;
}
function addElementToEndOfArray (arr, elem) {
   arr = [...arr, elem]
  return arr;
} 
function destructivelyAddElementToEndOfArray (arr, elem) {
 arr.push(elem);
  return arr;
}
function accessElementInArray (arr, ind) {
  return arr[ind];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift(0);
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  arr = arr.slice(1);
  return arr;
}
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray(arr){
  arr = arr.slice(0, arr.length - 1);
  return arr;
}
