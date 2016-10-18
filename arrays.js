var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(arr,elem){
  var newArray= [elem,...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr,elem){
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr,elem){
  var newArray= [...arr,elem];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr,elem){
  arr.push(elem);
  return arr;
}

function accessElementInArray(arr,ind){
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr
}

function removeElementFromBeginningOfArray(arr){
  return newArray = arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr
}

function removeElementFromEndOfArray(arr){
  var newArray = arr.slice(0,arr.length - 1);
  return newArray;
}
