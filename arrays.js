var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elt){
  let newArr = [elt, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, elt){
  arr.unshift(elt);
  return arr;
}

function addElementToEndOfArray(arr, elt){
  let newArr = [...arr, elt];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, elt){
  arr.push(elt);
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
  let newArr = arr.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  let newArr = arr.slice(0, arr.length-1);
  return newArr;
}
