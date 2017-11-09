var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(arr, n){
  var newArr = [];
  newArr = [n, ...arr]
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr,n){
  arr.unshift(n);
  return arr;
}
function addElementToEndOfArray(arr,n){
  var newArr = [];
  newArr = [...arr, n]
  return newArr;
}
function destructivelyAddElementToEndOfArray(arr,n){
  arr.push(n);
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
  return arr.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length - 1)

}
