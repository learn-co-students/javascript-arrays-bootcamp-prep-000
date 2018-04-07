var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elm){
  var other = [elm, ...arr];
  return other;
}

function destructivelyAddElementToBeginningOfArray(arr, elm){
  arr.unshift(elm);
  return arr;
}

function addElementToEndOfArray(arr, elm){
  var other = [...arr, elm];
  return other;
}

function destructivelyAddElementToEndOfArray(arr, elm){
  arr.push(elm);
  return arr;
}

function accessElementInArray(arr, idx){
  return arr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  var other = arr.slice(1);
  return other;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  var other = arr.slice(0, arr.length - 1);
  return other;
}




