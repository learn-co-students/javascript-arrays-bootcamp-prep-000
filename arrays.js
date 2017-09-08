var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(arr, e){
  return [e,...arr];
}


function destructivelyAddElementToBeginningOfArray(arr,e) {
  arr.unshift(e);
  return arr
}


function accessElementInArray(arr, n){
  return arr[n];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
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
  return arr.slice(0,arr.length-1);
}


function destructivelyAddElementToEndOfArray(arr, e){
  arr.push(e);
  return arr;
}

function addElementToEndOfArray(arr, e){
  return [...arr,e];
}
