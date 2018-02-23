var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
function addElementToBeginningOfArray(arr, elem){
  var arr2 = [elem, ...arr];
  return arr2;
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem){
  var arr2 = [...arr, elem];
  return arr2;
}

function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem);
  return arr;
}

function accessElementInArray(arr, i){
  return arr[i];
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
  return arr.slice(0, arr.length - 1);
}

