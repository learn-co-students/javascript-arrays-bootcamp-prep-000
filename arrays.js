var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'snickers'];

function addElementToBeginningOfArray(arr, beginning){
  return [beginning, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, beginning){
  arr.unshift(beginning);
  console.log(arr);
  return arr;
}

function accessElementInArray (arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  arr = arr.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray (arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0,arr.length-1);
}

function addElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}
