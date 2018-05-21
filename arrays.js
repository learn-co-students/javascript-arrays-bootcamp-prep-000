var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function accessElementInArray(arr, i){
  return arr[i]
}

function addElementToBeginningOfArray(arr, a){
  return [a, ...arr]
}
function destructivelyAddElementToBeginningOfArray(arr, a){
  arr.unshift(a)
  return arr
}

function removeElementFromBeginningOfArray(arr){
 return arr.slice(1) 
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr;
}


function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length - 1)
}
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function destructivelyAddElementToEndOfArray(arr, a){
  arr.push(a)
  return arr
}
function addElementToEndOfArray(arr, a){
  return [...arr, a]
}