var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elmnt){
  return [elmnt, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, elmnt){
  arr.unshift(elmnt);
  return arr;
}

function addElementToEndOfArray(arr, elmnt){
  return [...arr, elmnt];
}

function destructivelyAddElementToEndOfArray(arr, elmnt){
  arr.push(elmnt);
  return arr;
}

function accessElementInArray(arr, i){
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift(1);
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop;
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length - 1);
}
