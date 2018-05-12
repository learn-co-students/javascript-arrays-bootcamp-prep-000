var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, ele){
  return [ele, ...array]
} 

function destructivelyAddElementToBeginningOfArray(array, el){
  array.unshift(el);
  return array;
}

function addElementToEndOfArray(array, ele){
  return [...array, ele];
}

function destructivelyAddElementToEndOfArray(array, ele){
  array.push(ele);
  return array;
}

function accessElementInArray(arr, idx){
  return arr[idx];
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

