chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr,itemToAdd) {
  return [itemToAdd, ... arr];
}
// should return a new array and not modify the original.
// should add the element to the beginning of the array and then return the whole array


function destructivelyAddElementToBeginningOfArray(arr,itemToAdd){
  arr.unshift(itemToAdd);
  return arr;
  }

// should alter the original array that's passed in;
// should add the element to the beginning of the array and then return the whole array
//


function addElementToEndOfArray(arr, itemToAdd){
  return [...arr, itemToAdd];
}
// should not alter the original array
// an element to add to the end of the array.

function destructivelyAddElementToEndOfArray(arr, itemToAdd){
  arr.push(itemToAdd);
  return arr;
}
//should alter the original array.
// an element to add to the end of the array.


function accessElementInArray(arr, dx){
   return arr[dx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
    arr.shift();
    return arr;
}

function removeElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
