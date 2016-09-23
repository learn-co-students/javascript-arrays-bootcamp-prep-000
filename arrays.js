var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(arr, elem){
  arr = [elem, ...arr]
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}

function addElementToEndOfArray (arr, elem) {
  arr = [...arr, elem]
  return arr
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem)
  return arr
}

function accessElementInArray(arr, ind) {
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr, elem) {
  arr.shift(elem)
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  arr = arr.slice(1)
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr, elem) {
  arr.pop(elem)
  return arr
}

function removeElementFromEndOfArray(arr) {
  arr = arr.slice(0, arr.length - 1)
  return arr
}
