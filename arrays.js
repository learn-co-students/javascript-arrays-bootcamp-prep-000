var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(arr, element){
  var newArray = arr.unshift(element);
  return newArray;
}
function destructivelyAddElementToEndOfArray(arr,element){
  arr.unshift(element);
  return arr;
}
 function accessElementInArray(arr,index){
   return arr[index];
 }
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  arr.slice();
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  arr.slice(-1);
  return arr;
}
