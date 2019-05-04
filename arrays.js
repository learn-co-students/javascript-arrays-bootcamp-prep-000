var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem){
  let newArr = [elem, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem){
  let newArr = [...arr, elem];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem);
  return arr;
}

function accessElementInArray(arr, idx){
  return arr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr, elem){
  let arr1 = arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
   arr = arr.slice(1);
   return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr, elem){
  let arr1 = arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  arr = arr.slice(0, arr.length - 1);
  return arr;
}


destructivelyAddElementToBeginningOfArray([1,2,3], 5);