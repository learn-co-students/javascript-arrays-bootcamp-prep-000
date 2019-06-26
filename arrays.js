var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, a){
  arrNew = [a, ...arr]
  return arrNew
}

function destructivelyAddElementToBeginningOfArray(arr, a){
  arr.unshift(a)
  return arr
}

function addElementToEndOfArray(arr, a){
  arrNew = [...arr, a]
  return arrNew
}

function destructivelyAddElementToEndOfArray(arr, a){
  arr.push(a)
  return arr
}

function accessElementInArray(arr, pos){
  return arr[pos]
}

function destructivelyRemoveElementFromBeginningOfArray(arr, a){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  var arrNew = arr.slice(1)
  return arrNew
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0,arr.length - 1)
}
