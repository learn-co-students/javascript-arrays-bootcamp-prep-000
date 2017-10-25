

var chocolateBars = ["snickers",'hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr, elem){
  return [elem, ...arr];

}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem);
  return arr;

}
function accessElementInArray(arr, index) {
  return arr[index]

}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr

}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr;
}
function removeElementFromEndOfArray(arr){
  return arr.slice(0,arr.length-1)
}

function addElementToEndOfArray(array, element) {
  return array.push(element);
}

function addElementToEndOfArray(array, element){
  return [...array,element];
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array;
}
