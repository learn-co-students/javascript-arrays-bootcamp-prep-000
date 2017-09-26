var chocolateBars = new Array();
var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(arr, a){

  return [a,...arr];
}
function destructivelyAddElementToBeginningOfArray(arr,a){
  arr.unshift(a);
  return arr;
}
function addElementToEndOfArray(arr, a){
  return [...arr, a];
}
function destructivelyAddElementToEndOfArray(arr, a){
  arr.push(a);
  return arr;
}
function accessElementInArray(arr,a){
  return arr[a];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  arr= arr.slice(1);
  return arr;
}
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length -1);

}
