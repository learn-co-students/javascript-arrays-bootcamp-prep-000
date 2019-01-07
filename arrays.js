var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, elem){
  var new_arr = [elem, ...arr]
  return new_arr
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem)
  return arr
}

function addElementToEndOfArray(arr, elem){
  var new_arr = [...arr, elem]
  return new_arr
}

function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem)
  return arr
}

function accessElementInArray(arr, ind){
  return arr[ind]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  var new_arr = arr.slice(1)
  return new_arr
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length -1)
}




