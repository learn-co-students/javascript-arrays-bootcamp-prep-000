function addElementToBeginningOfArray(arr, element){
  return [element, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr
}

function addElementToEndOfArray(arr, element){
  return [...arr, element];
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift;
  return arr;
}
