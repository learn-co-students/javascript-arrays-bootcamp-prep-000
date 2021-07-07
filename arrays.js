var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem){
  return [elem, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem){
  return [...arr,elem];
}

function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr,elem){
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
  return arr.slice(0,arr.length-1);
}